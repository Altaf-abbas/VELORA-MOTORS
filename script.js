/* =========================================================
   VELORA AUTOMOTIVE
   Main JavaScript
========================================================= */


/* =========================
   ELEMENTS
========================= */

const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const navigation = document.querySelector(".navigation");


/* =========================
   NAVBAR SCROLL EFFECT
========================= */


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   MOBILE MENU
========================= */

if (menuBtn && navigation) {

    menuBtn.addEventListener("click", () => {

        navigation.classList.toggle("open");

        menuBtn.classList.toggle("active");

        const isOpen =
            navigation.classList.contains("open");

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu after clicking link */

    const navLinks =
        document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuBtn.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const animatedElements =
    document.querySelectorAll(
        ".car-card, .brand-card, .feature-card"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   BUTTON HOVER EFFECT
========================= */

const buttons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn, .outline-btn"
    );


buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = "0.3s ease";

    });

});


/* =========================
   IMAGE ERROR HANDLING
========================= */

const images =
    document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        const parent =
            image.closest(".car-image");

        if (parent) {

            parent.classList.add("image-error");

        }

    });

});


/* =========================
   CURRENT YEAR
========================= */

const footerText =
    document.querySelector(".footer-bottom p");

if (footerText) {

    const currentYear =
        new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} VELORA AUTOMOTIVE. All Rights Reserved.`;

}


/* =========================
   PREVENT EMPTY LINKS
========================= */

document
    .querySelectorAll('a[href="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

        });

    });
    