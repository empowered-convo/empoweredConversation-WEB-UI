class Testimonial {
  constructor(testimonial) {
    this.testimonial = testimonial
    this.button = document.querySelector('.next-button')
    this.reset()
    this.index = 0
    this.limit = testimonials.length - 1
    this.button.addEventListener('click', () => this.showNextReview())
    
  }
  reset() {
    testimonials[testimonials.length - 1].classList.remove('show')
    this.index = 0
    testimonials[this.index].classList.add('show')
  }

  showNextReview() {
    
    if (this.index < this.limit) {
      testimonials[this.index].classList.toggle('show')
      this.index++
      testimonials[this.index].classList.toggle('show')
      console.log('index: ', this.index);

    } else {
      // console.log('index: ', this.index);

      this.reset()
      console.log('index after reset: ', this.index);

    }

  }
}



const testimonials = document.querySelectorAll('.testimonial')

testimonials.forEach(testimonial => new Testimonial(testimonial))