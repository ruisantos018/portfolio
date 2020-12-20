const menuButton = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const sortButton = document.querySelector('#sortBtn')
const sortMenu = document.querySelector('.sort')
const ascButton = document.getElementById('asc')
const descButton = document.getElementById('desc')
const formElem = document.getElementById('contactForm')
const elems = document.querySelectorAll('.formInput')
/* MENU */
menuButton.addEventListener('click', () => {
   menuButton.classList.toggle('open')
   menu.classList.toggle('show')
})

/* SORT PROJECTS */
sortButton.addEventListener('click', () => {
   sortMenu.classList.toggle('show')
})

ascButton.addEventListener('click', () => {
   printSortedArr('asc')
   sortMenu.classList.remove('show')
})

descButton.addEventListener('click', () => {
   printSortedArr('desc')
   sortMenu.classList.remove('show')
})

/* FORM */
formElem.addEventListener('submit', (e) => {
   const submitMsg = document.querySelector('.submit-msg')
   e.preventDefault()

   // reset colors so they don't stay red after
   for(el of elems) {
      el.style.color = null
   }

   submitMsg.style = "visibility: visible"

   const errors = validateForm(formElem)
   console.log(errors)

   if(errors.length > 0) {
      for(err of errors) {
         formElem.children[err].style.color = "red"
         submitMsg.style.color = "#D7263D"
         submitMsg.innerHTML = "Could not send message."
      }
   } else {
      submitMsg.innerHTML = "Your message was successfully sent!"
      for(el of elems) {
         el.value = ""
      }
   }
})
// reset color after focusing an input field
for(el of elems) {
   el.addEventListener('focus', function(){
      this.style.color = null
   })
}

/* HIDE MENUS WHEN CLICKED OUTSIDE */
// .menu .sort
window.addEventListener('click', function(e) {
   if(!menuButton.contains(e.target) && (!sortButton.contains(e.target))) {
      console.log('test')
      menu.classList.remove('show')
      menuButton.classList.remove('open')
      sortMenu.classList.remove('show')
   }
})

/* FIXES NAVBAR ON TOP*/
window.addEventListener('scroll', function() {
   const target = document.getElementById('titleName')
   const nav = document.querySelector('nav')
   if(window.scrollY > (target.offsetTop + target.offsetHeight) && window.innerWidth < 992) {
      nav.classList.add('nav-top')
      nav.classList.add('show')
   } else {
      nav.classList.remove('nav-top')
      nav.classList.remove('show')
   }
})