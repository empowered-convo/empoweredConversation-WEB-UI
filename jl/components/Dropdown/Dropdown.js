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
  }
  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle("dropdown-hidden");
  }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

