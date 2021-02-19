window.addEventListener('DOMContentLoaded', () => {
    let listElements = document.getElementsByClassName("list-group-item")

    for (let i = 0; i < listElements.length; i++) {
        listElements[i].addEventListener('click', (event) => {
            if (event.target.parentElement.classList.contains('list-group-item')) {
                enableOnlyOneListElementToBeActive(event.target.parentElement, listElements)
            } else if (event.target.parentElement.classList.contains('d-flex')) {
                enableOnlyOneListElementToBeActive(event.target.parentElement.parentElement, listElements)
            } else if (event.target.parentElement.classList.contains('list-group')) {
                enableOnlyOneListElementToBeActive(event.target, listElements)
            }
        })
    }

    function enableOnlyOneListElementToBeActive(clickedElement, listElements) {
        for (let j = 0; j < listElements.length; j++) {
            if (listElements[j].classList.contains('active')) {
                listElements[j].classList.remove('active')
            }
        }
        clickedElement.classList.add('active')

        var element = document.getElementById("scrollAim")
        element.scrollIntoView({
            behavior: "smooth"
        })
    }
})