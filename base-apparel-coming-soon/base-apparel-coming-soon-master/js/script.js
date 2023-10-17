const inputEmail = document.getElementById('input-email');
const arrowSendEmail = document.querySelector('.arrow-send');
const msgShowUp = document.querySelector('.msg-show-up');
const errorIcon = document.querySelector('.error');
const emailValid = document.querySelector('.email-valid-show-up')

arrowSendEmail.addEventListener('click', (event) => {
    event.preventDefault();
    const emailValue = inputEmail.value;

    let reg = /\S+@\S+\.\S+/;
    if (reg.test(emailValue)) {
        emailValid.classList.add('email-valid-show-up-active');
    } else {
        msgShowUp.classList.add('msg-show-up-active');
        errorIcon.classList.add('error-active');
    }

    inputEmail.value = '';
    
    inputEmail.addEventListener('input', () => {
        msgShowUp.classList.remove('msg-show-up-active');
        emailValid.classList.remove('email-valid-show-up-active');
        errorIcon.classList.remove('error-active')
    })

});

