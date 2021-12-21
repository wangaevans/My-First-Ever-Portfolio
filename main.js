var btn = document.querySelector('.toggle')
var menu = document.querySelector('.links')
var yr = document.querySelector('.year')

btn.addEventListener('click', () => {
  menu.classList.toggle('menu')
})
var date = new Date();
var year = date.getFullYear();
yr.textContent= year