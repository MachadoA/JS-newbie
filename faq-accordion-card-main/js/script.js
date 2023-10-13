const arrows = document.querySelectorAll('.arrow');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const titles = document.querySelectorAll('.question h2');
const element = document.querySelector('.container');
let heightFixed = 495;
let heightTotal = heightFixed;
let openIndex = null;

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        let screenWidth = window.innerWidth; 
        console.log(screenWidth);
        arrows[index].classList.toggle('arrow-active');
        answers[index].classList.toggle('answer-active');
        titles[index].classList.toggle('active-h2');

        if (openIndex !== null && openIndex !== index) {
            question.classList.remove('arrow-active');
            answers[openIndex].classList.remove('answer-active');
            titles[openIndex].classList.remove('active-h2');
            arrows[openIndex].classList.remove('arrow-active');
        }

        if (screenWidth <= 950) {
            heightTotal = heightFixed + (answers[index].classList.contains('answer-active') ? answers[index].offsetHeight : 0);
        } else {
            heightTotal = heightFixed;
        }

        element.style.height = heightTotal + 'px';
        openIndex = (openIndex === index) ? null : index;
    });
});


