let burgerBtn = document.querySelector('.header-burger');
let activemenu = document.querySelector('.header-menu');
burgerBtn.addEventListener('click',function(){
    burgerBtn.classList.toggle('activeBurger');
    activemenu.classList.toggle('activeMenu');
})