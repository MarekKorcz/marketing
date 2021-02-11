window.addEventListener('DOMContentLoaded', () => {

    const DOMAIN_NAME = "http://localhost:3693"
    
    let tails = document.querySelectorAll('.tail')

    if(window.innerWidth >= 750) {
        for (let i = 0; i < tails.length; i++) {

            // add faded class to tail element when device is NOT mobile
            tails[i].classList.add('faded')

            // add event listener to remove faded class when hovering with mouse pointer
            tails[i].addEventListener("mouseenter", (element) => {
                if(element.target.classList.contains('tail') &&
                   element.target.classList.contains('faded')) {
                    element.target.classList.remove('faded')
                }
            })

            // add event listener to add faded class when leaving hovered tail with mouse pointer
            tails[i].addEventListener("mouseleave", (element) => {
                if(element.target.classList.contains('tail') &&
                   !element.target.classList.contains('faded')) {
                    element.target.classList.add('faded')
                }
            })

            // redirect when tail clicked
            tails[i].addEventListener("click", (element) => {
                window.location.href = `${DOMAIN_NAME}${element.target.parentElement.dataset.src}`
            })
        }
    }
})