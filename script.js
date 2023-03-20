let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

let menuMobile = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

const btnTop = document.querySelector(".btn-top");
menuMobile.onclick = () => {
    menuMobile.classList.toggle("bx-x");
    navBar.classList.toggle("active");
};
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((nav) => {
                nav.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
        if (top > 1000) {
            btnTop.classList.add("active");
        } else {
            btnTop.classList.remove("active");
        }
    });
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.screenY > 100);

    menuMobile.classList.remove("bx-x");
    navBar.classList.remove("active");
};

ScrollReveal({
    reset: true,
    distance: "40px",
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
    ".home-img, .services-container, .portfolio-box, .contact form, .btn-top",
    { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "YouTuber"],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
