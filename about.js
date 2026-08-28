/* =========================================================
   VELORA ABOUT PAGE
========================================================= */


/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".stat-number");


const counterObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                const counter =
                    entry.target;

                const target =
                    Number(counter.dataset.target);


                let current = 0;

                const duration = 1800;

                const startTime =
                    performance.now();


                function updateCounter(currentTime) {

                    const elapsed =
                        currentTime - startTime;

                    const progress =
                        Math.min(
                            elapsed / duration,
                            1
                        );


                    /*
                        Ease-out animation
                    */

                    const easedProgress =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );


                    current =
                        Math.floor(
                            easedProgress * target
                        );


                    counter.textContent =
                        current.toLocaleString();


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target.toLocaleString();

                    }

                }


                requestAnimationFrame(
                    updateCounter
                );


                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.4
        }
    );


counters.forEach((counter) => {

    counterObserver.observe(counter);

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".value-card, .intro-left, .intro-right, .mission-content"
    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                entry.target.style.opacity =
                    "1";

                entry.target.style.transform =
                    "translateY(0)";


                observer.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});