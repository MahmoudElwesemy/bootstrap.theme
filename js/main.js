
// popup foe galary

let popUp = document.querySelector(".popup") 
let popupImage = document.querySelector(".popup img")
let cards = document.querySelectorAll(".portifolio .overlay");
let imgs = document.querySelectorAll(".portifolio .card-img img")
let closeIcon = document.querySelector(".portifolio .popup .icon");
let closeButton = document.querySelector(".portifolio .popup button")

cards.forEach((card)=>{
card.addEventListener("click" , function (){
   popUp.style.display = "block" ;
   popupImage.setAttribute("src",card.dataset.src);
})
})
function closeAction(){
    popUp.style.display = "none" ;
}
closeIcon.addEventListener("click", function(){
    closeAction()
}
)
closeButton.addEventListener("click", function(){
    closeAction()
})




// Add class 'active' to section when near top of viewport


let pageSections = document.querySelectorAll('section')
window.addEventListener("scroll", function() {
    pageSections.forEach((section) => {
            const scrollDetection = section.getBoundingClientRect().top
            const list = document.querySelector(`a[href="#${section.id}"]`)
            if (scrollDetection > -300&& scrollDetection < 300) {
                list.classList.add("active-class");
            } else {
                list.classList.remove("active-class")
            }
        }

    )
})