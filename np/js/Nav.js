const navMenu  = document.querySelector('nav')
const menuButton = document.querySelector('.showMenuButton')

// window.addEventListener('scroll', ()=> {
//   console.log('scrolling');
// })
menuButton.addEventListener('mouseover', () => {
  navMenu.classList.add('showMenu')
}) 
navMenu.addEventListener('click', ()=> {
  navMenu.classList.toggle('showMenu')
})
window.addEventListener('click', ()=> {
  if (navMenu.classList.contains('showMenu')) {
    navMenu.classList.remove('showMenu')
  }
})