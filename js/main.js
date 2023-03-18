
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