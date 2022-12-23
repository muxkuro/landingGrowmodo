const nav = document.querySelector(".header__nav");
const burgerBtn = document.querySelector(".header__nav .header__burger__btn");

function togleMenu(){
    nav.classList.toggle('active');
}

burgerBtn.addEventListener('click', togleMenu);