let openHamburger = document.querySelector(".header-right > a")
const hamburger = document.querySelector(".hamburger-menu")
const closeHamburger = document.querySelector(".close")


openHamburger.addEventListener("click",

    function(){
        hamburger.classList.add = "active"
    }

)


closeHamburger.addEventListener("click",

function(){
    hamburger.classList.remove = "active"
}
)
