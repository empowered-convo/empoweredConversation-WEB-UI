let buttons = document.getElementsByTagName("button")

buttons.forEach(button => {
    button.addEventListener("click", event => {
        button.style.transform = "translate(4px,4px)"
        button.style.transition = ".5s easein"
        button.style.boxShadow = "2px 5px"
        event.stopPropagation()
    })
    button.addEventListener("mouseout", event => {
        button.style.transform = "translate(0px,0px)"
    })
})