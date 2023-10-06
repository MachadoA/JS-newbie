const chooseButtons = document.querySelectorAll('.choose');
const submit = document.querySelector('.submit'); 
let elementoClicado;

chooseButtons.forEach((item) => {
    item.addEventListener('click', (e) => {  
        elementoClicado = e.target.textContent;
        chooseButtons.forEach((button) => {
            button.classList.remove('choose-active');
        });
        item.classList.add('choose-active');
        console.log( elementoClicado);
    });
    
});

submit.addEventListener('click', () => {
    if(elementoClicado){
        window.location.href = 'submit.html';
    } else {
        window.alert('Por favor, escolhe uma opção antes de prosseguir.')
    }
})

window.getElementoClicado = function() {
    return elementoClicado;
}
