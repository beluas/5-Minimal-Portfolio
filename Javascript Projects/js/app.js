(function() {
    AOS.init({
        offset: 200,
        duration: 1500
    });

    // Toggle Menu

    let menu = document.querySelector("#toggle");
    let resize = document.querySelector("#resize");
    let links = [...resize.querySelectorAll("ul li a")];
    let closeBtn = document.querySelector(".close-btn");

    menu.addEventListener("click", () => {
        menu.classList.toggle("on");
        resize.classList.toggle("active");
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.toggle("on");
            resize.classList.toggle("active");
        });
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.toggle("on");
        resize.classList.toggle("active");
    });
    // Toggle Menu ENDS

    // NAV ANIMATION

    // TweenMax.from("#brand", 1, {
    //     delay: 0.5,
    //     y: 10,
    //     opacity: 0,
    //     ease: Expo.easeInOut
    // });

    // TweenMax.staggerFrom(
    //     "#menu li a",
    //     1,
    //     {
    //         delay: 0.6,
    //         opacity: 0,
    //         ease: Expo.easeInOut
    //     },
    //     0.2
    // );

    // new WOW().init();
})();
