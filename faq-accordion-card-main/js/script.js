const arrows = document.querySelectorAll('.arrow');
const answers = document.querySelectorAll('.answer');
const titles = document.querySelectorAll('.question h2');

arrows.forEach(function(arrow, index){
    arrow.addEventListener('click', () =>{
        arrow.classList.toggle('arrow-active');
        answers[index].classList.toggle('answer-active');
        titles[index].classList.toggle('active-h2');
        console.log(titles[index])
        })
    })
