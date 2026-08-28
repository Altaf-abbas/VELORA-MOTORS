function searchCars(){

const input =
document.getElementById("searchInput")
.value
.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

const name =
card.querySelector("h2")
.innerText
.toLowerCase();

if(name.includes(input)){
card.style.display="block";
}else{
card.style.display="none";
}

});

}