const iconMenu = document.querySelector(".cabecalho__menu");
const sideMenu = document.querySelector(".left-menu");

iconMenu.addEventListener('click', ()=>{
  sideMenu.classList.toggle('left-menu__open')
  iconMenu.innerHTML = `<img src="./assets/imgs/X.png" alt="">`
})

