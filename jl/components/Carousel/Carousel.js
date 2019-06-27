
class Carousel {
    constructor(element) {
        this.element = element;
        this.left = this.element.querySelector(".left-button")
        this.right = this.element.querySelector(".right-button")
        this.cards = Array.from(this.element.querySelectorAll(".card"))
        this.currentIndex = 0;
        this.cards[this.currentIndex].style.display = "flex"
        this.left.addEventListener("click", () => this.prev())
        this.right.addEventListener("click", () => this.next())
    }
    prev() {   
        this.cards.forEach(item => item.style.display = "none");
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = this.cards.length - 1;
        }
        this.cards[this.currentIndex].style.display = "flex"
    }
    next() {
        this.cards.forEach(item => item.style.display = "none");
        this.currentIndex += 1;
        if (this.currentIndex > this.cards.length - 1 ) {
            this.currentIndex = 0;
        }
        this.cards[this.currentIndex].style.display = "flex"
    }
}


let carousel = document.querySelectorAll(".carousel")
carousel.forEach(carousel => new Carousel(carousel))

