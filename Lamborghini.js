const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const carName = card.querySelector("h2").textContent.toLowerCase();

        if (carName.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});