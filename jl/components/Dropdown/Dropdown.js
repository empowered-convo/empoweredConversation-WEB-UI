class Dropdown {
  constructor(element) {
    
    this.element = element;
    console.log(element + " is working!")

    this.button = this.element.querySelector(".dropdown-button");
    console.log(this.button)
    
    this.content = this.element.querySelector(".dropdown-content");
    console.log(this.content)

    this.button.addEventListener('click', () => {
      this.toggleContent();
    });
    this.content.addEventListener('mouseleave', () => {
      this.toggleContent();
    })
    /* this.button.addEventListener('mouseleave', () => {
     this.toggleCheck() ? this.toggleContent() : console.log("I got it working!")
     this.toggleContent();
    })
    */
  }
  toggleContent() {
    this.content.classList.toggle("dropdown-hidden");
  }
  /*
  toggleCheck() {
    return this.content.classList.contains("dropdown-hidden");
  }
  */
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

