let hamburgerMenu = document.querySelector(".hamburger-menu")
const openHamburger = document.querySelector(".fas")
const closeHamburger = document.querySelector(".hamburger-menu .close")


openHamburger.addEventListener("click",

    function(){
        hamburgerMenu.className = "hamburger-menu active"
    }

)


closeHamburger.addEventListener("click",

function(){
    hamburgerMenu.className = "hamburger-menu"
}
)
