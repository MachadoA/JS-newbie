const arrows = document.querySelectorAll('.arrow');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const titles = document.querySelectorAll('.question h2');
const element = document.querySelector('.container');
let heightFixed = 495;
let heightContainer
let heightTotal = heightFixed;
let openIndex = null;

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        arrows[index].classList.toggle('arrow-active');
        answers[index].classList.toggle('answer-active');
        titles[index].classList.toggle('active-h2');

        if (openIndex !== null && openIndex !== index) {
            question.classList.remove('arrow-active');
            answers[openIndex].classList.remove('answer-active');
            titles[openIndex].classList.remove('active-h2');
            arrows[openIndex].classList.remove('arrow-active');
        }

        heightTotal = heightFixed + (answers[index].classList.contains('answer-active') ? answers[index].offsetHeight : 0);
        element.style.height = heightTotal + 'px';
        openIndex = (openIndex === index) ? null : index;
    });
});



// arrows.forEach((arrow, index) => {
//     arrow.addEventListener('click', () => {
//         arrow.classList.toggle('arrow-active');
//         answers[index].classList.toggle('answer-active');
//         titles[index].classList.toggle('active-h2');

//         if (openIndex !== null && openIndex !== index) {
//             arrow.classList.remove('arrow-active');
//             answers[openIndex].classList.remove('answer-active');
//         }

//         heightTotal = heightFixed + (answers[index].classList.contains('answer-active') ? answers[index].offsetHeight : 0);
//         element.style.height = heightTotal + 'px';
//         openIndex = (openIndex === index) ? null : index;
//     });
// });

