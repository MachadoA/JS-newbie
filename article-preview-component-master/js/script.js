const btnIcon =document.querySelector('.btn-icon');
const btnMobile = document.querySelector('.btn-mobile');
const showUp = document.querySelector('.show-up');

btnIcon.addEventListener('click', () => {
    showUp.classList.toggle('show-up-active');
    btnMobile.addEventListener('click', () => {
        showUp.classList.remove('show-up-active');
    })
})