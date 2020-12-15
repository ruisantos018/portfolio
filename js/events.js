const menuButton = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')

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

