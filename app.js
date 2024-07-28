


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



main = document.querySelector("body");
cursor = document.querySelector("#cursor");
main.addEventListener("mousemove", function (det) {
    gsap.to(cursor, {
        x: det.x,
        y: det.y,
        duration: .9,
        ease: "power2.out"
    })
})

const page2 = document.querySelector("#page2");
page2.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        backgroundColor: "blue", // Change to desired color
        duration: 0.2,
        scale: 10,
        mixBlendMode: "color-burn",
        filter: "grayscale(50%)"
    });
});
page2.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        backgroundColor: "orangered", // Change back to original color
        duration: 0.2,
        scale: 1,
        mixBlendMode: "normal",
        filter: "grayscale(0)"
    });
});
