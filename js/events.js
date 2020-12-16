const menuButton = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const sortButton = document.querySelector('#sortBtn')
const ascButton = document.getElementById('asc')
const descButton = document.getElementById('desc')
const sortMenu = document.querySelector('.sort')

let menuOpen = false
menuButton.addEventListener('click', () => {
    if(!menuOpen) {
        menuButton.classList.add('open')
        menu.classList.add('show')
        menuOpen = true
    } else {
        menuButton.classList.remove('open')
        menu.classList.remove('show')
        menuOpen = false
    }
})

let sortOpen = false
sortButton.addEventListener('click', () => {
   if(!sortOpen) {
      sortMenu.classList.add('show')
      sortOpen = true;
   } else {
      sortMenu.classList.remove('show')
      sortOpen = false;
   }
})

ascButton.addEventListener('click', () => {
   sortProj('asc')
   sortMenu.classList.remove('show')
})

descButton.addEventListener('click', () => {
   sortProj('desc')
   sortMenu.classList.remove('show')

})