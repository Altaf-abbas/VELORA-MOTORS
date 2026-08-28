const searchInput =
document.getElementById("searchInput");

const cards =
document.querySelectorAll(".car-card");

searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title =
        card.querySelector("h3")
        .textContent
        .toLowerCase();

        if(title.includes(value)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

});