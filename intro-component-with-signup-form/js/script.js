const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const inputs = document.querySelectorAll('.custom-input');
const iconErrors = document.querySelectorAll('.icon-error');
const alertErrors = document.querySelectorAll('.alert-error');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let valid = true;
    inputs.forEach(customInput => {
        let input = customInput.querySelector('input'); 
        if (input) {
          if (input.value.trim() === '') {
            // console.log(`${input.id} está vazio`);
            customInput.querySelector('.icon-error').style.display = 'block';
            customInput.querySelector('.alert-error').style.display = 'block';
            customInput.querySelector('input').classList.add('active')
            valid = false;
          } else{
            customInput.querySelector('.icon-error').style.display = 'none';
            customInput.querySelector('.alert-error').style.display = 'none';
            if (input.id === 'email') {
                const emailValue = input.value;
                let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    if(regex.test(emailValue)){
                        customInput.querySelector('.icon-error').style.display = 'none';
                        customInput.querySelector('.alert-error').style.display = 'none';
                        // console.log('email valido')
                    }else{
                        customInput.querySelector('.icon-error').style.display = 'block';
                        customInput.querySelector('.alert-error').style.display = 'block';
                        // console.log('email invalido')
                        valid = false;
                    }
            }
          }
        }
    });
    
    if (valid) {
        // alert('Registration successful!');
        function openModal() {
            var modal = document.querySelector(".modal");
            modal.style.display = "block";
            setTimeout(function() {
                modal.style.display = "none"; // Fecha o modal após 2 segundos
            }, 3000);
        }

        inputs.forEach(customInput => {
            let input = customInput.querySelector('input');
            if (input) {
                input.value = '';
            }
        });
    }

    openModal();
})




