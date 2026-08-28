document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");

    const cards = document.querySelectorAll(".car-card");

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {

        const searchValue =
            searchInput.value.toLowerCase().trim();

        cards.forEach((card) => {

            const carName =
                card.querySelector("h3")
                .textContent
                .toLowerCase();

            if (carName.includes(searchValue)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

    console.log("BMW Page Loaded Successfully");

});