const headerBttn = document.getElementById("bttn__sidemenu")
const menuBttns = document.querySelectorAll("#sidemenu__container > li > a")
const menu = document.getElementById("sidemenu")

const handleMenu = () => {
    console.log(menu)
    menu.classList.toggle('active')
}

const getButtons = () => {
    for(let index = 0; index < menuBttns.length; index++ ){
        button = menuBttns[index]
        button.addEventListener('click', handleMenu)
    }
}

headerBttn.addEventListener('click', handleMenu)
getButtons()