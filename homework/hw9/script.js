/*
1. При изменении значения в input с id="from",
значение содержащееся в нем должно моментально отображаться в span.
То есть при печати в input'е тег span также должен меняться.
*/

console.log(`TASK 1`);

const fromEl_1 = document.querySelector('#from');
const spanEl_1 = document.querySelector('span');

fromEl_1.addEventListener('input', function (e) {
    spanEl_1.textContent = fromEl_1.value;
});

console.log(' ');


/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.
*/

console.log(`TASK 2`);

const btnEl_2 = document.querySelector('button.messageBtn');
const messageEl_2 = document.querySelector('.message');

btnEl_2.addEventListener('click', function (e) {
    messageEl_2.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageEl_2.style.visibility = 'visible';
});

console.log(' ');


/*
3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.
Если какое-либо поле не заполнено, форма не должна отправляться,
также должны быть подсвечены незаполненные поля
(необходимо поставить класс error незаполненным полям).
Как только пользователь начинает заполнять какое-либо поле,
необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

console.log(`TASK 3`);

const formEl_3 = document.querySelector('form');
const inpFormEl_3 = formEl_3.querySelector('input');
const selectFormEl_3 = formEl_3.querySelector('select');

formEl_3.addEventListener('submit', function (e) {
    if (inpFormEl_3.value === '' || selectFormEl_3.value === '') {
        e.preventDefault();
        if (inpFormEl_3.value === '') {
            inpFormEl_3.classList.add('error');
        }
        if (selectFormEl_3.value === '') {
            selectFormEl_3.classList.add('error');
        }
    }
});

inpFormEl_3.addEventListener('input', function () {
    if (inpFormEl_3.value === '') {
        inpFormEl_3.classList.add('error');
    } else {
        inpFormEl_3.classList.remove('error');
    }
});

selectFormEl_3.addEventListener('input', function () {
    if (selectFormEl_3.value === '') {
        selectFormEl_3.classList.add('error');
    } else {
        selectFormEl_3.classList.remove('error');
    }
});

console.log(' ');
