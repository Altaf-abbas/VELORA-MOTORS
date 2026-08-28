// Brand Button Animation

const brandButtons =
document.querySelectorAll(".brand-btn");

brandButtons.forEach((button)=>{

    button.addEventListener("mouseenter",()=>{

        button.style.boxShadow =
        "0 0 20px rgba(212,175,55,0.4)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.boxShadow = "none";

    });

});

// Current Year Footer

const footerSmall =
document.querySelector("footer small");

if(footerSmall){

    footerSmall.innerHTML =
    `© ${new Date().getFullYear()} VELORA Automotive. All Rights Reserved.`;

}

// Console Welcome

console.log("VELORA Brands Page Loaded");