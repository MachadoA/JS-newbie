const arrows = document.querySelectorAll('.arrow');
const answers = document.querySelectorAll('.answer');
const titles = document.querySelectorAll('.question h2');
const element = document.querySelector('.container');
const heightFixed = 495;
let heightTotal = heightFixed;
let openIndex = null;

arrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        arrow.classList.toggle('arrow-active');
        answers[index].classList.toggle('answer-active');
        titles[index].classList.toggle('active-h2');

        if (openIndex !== null && openIndex !== index) {
            arrow.classList.remove('arrow-active');
            answers[openIndex].classList.remove('answer-active');
        }

        heightTotal = heightFixed + (answers[index].classList.contains('answer-active') ? answers[index].offsetHeight : 0);
        element.style.height = heightTotal + 'px';
        openIndex = (openIndex === index) ? null : index;
    });
});

