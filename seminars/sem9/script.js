/*
1. В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
Добавить кнопку отправить
При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”
*/

console.log(`TASK 1`);

const formEl_1 = document.querySelector('.form');
const checkEl_1 = formEl_1.querySelector('.check');
const btnEl_1 = formEl_1.querySelector('.btn');

btnEl_1.addEventListener('click', function (e) {
    if (!checkEl_1.checked) {
        const errorEl_1 = document.createElement('span');
        errorEl_1.innerHTML = 'Необходимо согласиться с условиями! ';
        errorEl_1.style.color = 'red';
        checkEl_1.insertAdjacentElement('afterend', errorEl_1);
        e.preventDefault();
    }
});
console.log(formEl_1);

console.log(' ');


/*
2. В html создать 2 элемента радио кнопки (input type=”radio”)
и текст “Чай”, “Кофе” соответственно
Кнопка отправить
Если выбран чай, необходимо вывести сообщение “Чай закончился”
Если выбран кофе, необходимо вывести соообщение “кофе закончился”
*/

console.log(`TASK 2`);

const formEl_2 = document.querySelector('.form_2');
const checkEl_2_1 = formEl_2.querySelector('#tea');
const checkEl_2_2 = formEl_2.querySelector('#coffee');
const btnEl_2 = formEl_2.querySelector('.btn_2');

btnEl_2.addEventListener('click', function (e) {
    const errorEl_2_2 = document.createElement('span');
    errorEl_2_2.style.color = 'red';
    if (checkEl_2_1.checked) {
        errorEl_2_2.innerHTML = 'Чай закончился!';
    }
    if (checkEl_2_2.checked) {
        errorEl_2_2.innerHTML = 'Кофе закончился!';
    }
    btnEl_2.insertAdjacentElement('beforebegin', errorEl_2_2);
    e.preventDefault();
});

console.log(' ');


/*
3. Создать поле ввода (пароль)
Кнопка отправить
Если пользователь вводит текст “пароль”
то поле ввода должно быть подсвечено зеленым цветом
Если пароль неверный, у поля ввода появляется
красная обводка и текст “пароль неверный”
*/

console.log(`TASK 3`);

const formEl_3 = document.querySelector('.form_3');
const pswEl_3 = formEl_3.querySelector('#password');
const btnEl_3 = formEl_3.querySelector('.btn_3');

btnEl_3.addEventListener('click', function (e) {
    if (pswEl_3.value !== 'password') {
        pswEl_3.classList.remove('green_3');
        pswEl_3.classList.add('red_3');
        const errorEl_3 = document.createElement('span');
        errorEl_3.style.color = 'red';
        errorEl_3.innerHTML = 'Пароль неверный!';
        btnEl_3.insertAdjacentElement('beforebegin', errorEl_3);
    } else {
        pswEl_3.classList.remove('red_3');
        pswEl_3.classList.add('green_3');
    }
    e.preventDefault();
});

console.log(' ');


/*
4. Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
При вводе текста в поле ввода необходимо
чтобы текст внутри заголовка менятся на введенный в поле ввода
*/

console.log(`TASK 4`);

let h1El_4 = document.querySelector('h1.h1_4');
let inpEl_4 = document.querySelector('input.input_4');

inpEl_4.addEventListener('input', function () {
    h1El_4.innerHTML = inpEl_4.value;
});

console.log(' ');
