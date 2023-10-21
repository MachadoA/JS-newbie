const submit = document.querySelector('#submit');
const email = document.querySelector('#email');
const alert = document.querySelector('#alert');
const showUp = document.querySelector('.showUp');

submit.addEventListener('click', (e) => {

    e.preventDefault();
    const checkEmail = email.value;
    let reg = /\S+@\S+\.\S+/;

    if (checkEmail === '' || !reg.test(checkEmail)) {
        alert.style.display = 'block';
    } else{

        showUp.style.display = 'block';
        setTimeout(function(){
            console.log('entrei')
            showUp.style.display = 'none';
        }, 3500);

        email.value = ''
    }

    email.addEventListener('input', () =>{
        alert.style.display = 'none';
    })


});