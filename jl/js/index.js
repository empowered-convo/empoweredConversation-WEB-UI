let buttons = document.querySelectorAll(".btn");
let buttonsArray = Array.from(buttons);

console.log(buttonsArray)

buttonsArray.forEach(button => {
    button.addEventListener("mousedown", event => {
        button.style.transform = "translate(2px,2px)"
    });
    button.addEventListener("mouseup", event => {
        button.style.transform = "translate(0px,0px)"
    });
})