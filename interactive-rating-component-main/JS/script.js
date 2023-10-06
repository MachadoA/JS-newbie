document.addEventListener('DOMContentLoaded', () => {
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
        });
    });

    submit.addEventListener('click', () => {
        if(elementoClicado){
        window.location.href = 'submit.html?valor=' + encodeURIComponent(elementoClicado);
        } else {
            window.alert('Please select an option before proceeding.')
        }
    });

});
