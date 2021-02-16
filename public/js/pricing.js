window.addEventListener('DOMContentLoaded', () => {
    let listElements = document.getElementsByClassName("list-group-item")

    for (let i = 0; i < listElements.length; i++) {
        listElements[i].addEventListener('click', (event) => {
            console.log(event.target.parentElement)
        })
    }
})