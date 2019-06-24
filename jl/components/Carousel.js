class Carousel {
    constructor(element) {
        this.element = element;
        this.left = this.element.querySelector(".left-button")
        this.right = this.element.querySelector(".right-button")
        this.images = Array.from(this.element.querySelectorAll("img"))
        this.currentIndex = 0;
        this.images[this.currentIndex].style.display = "block"
        this.left.addEventListener("click", () => this.prev())
        this.right.addEventListener("click", () => this.next())
    }
    prev() {   
        this.images.forEach(item => item.style.display = "none");
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = this.images.length - 1;
        }
        this.images[this.currentIndex].style.display = "block"
    }
    next() {
        this.images.forEach(item => item.style.display = "none");
        this.currentIndex += 1;
        if (this.currentIndex > this.images.length - 1 ) {
            this.currentIndex = 0;
        }
        this.images[this.currentIndex].style.display = "block"
    }
}


let carousel = document.querySelectorAll(".carousel")
carousel.forEach(carousel => new Carousel(carousel))