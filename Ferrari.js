function searchCars(){

const input =
document.getElementById("searchInput")
.value
.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

const carName =
card.querySelector("h2")
.innerText
.toLowerCase();

if(carName.includes(input)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

}