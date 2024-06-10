// анимация бургер-меню
let burgerIcon_1stChild = document.querySelector('.burger-icon .line:nth-child(1)');
let burgerIcon_2ndChild =  document.querySelector('.burger-icon .line:nth-child(2)');
let burgerIcon_3rdChild =  document.querySelector('.burger-icon .line:nth-child(3)');
let navigationMenu =  document.querySelector('.nav');
document.querySelector('.burger-icon').addEventListener('click', function (){
    burgerIcon_1stChild.classList.toggle('active');
    burgerIcon_2ndChild.classList.toggle('active');
    burgerIcon_3rdChild.classList.toggle('active');
    navigationMenu.classList.toggle('active');
});

console.log('site by Anvar [11-121 group]');


