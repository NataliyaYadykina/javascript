document.addEventListener("DOMContentLoaded", function () {


    /*
    1. Необходимо вывести сообщение в консоль "все теги прогрузились",
    когда все теги будут созданы браузером.
    */

    console.log(`TASK 1`);
    console.log(`Tags downloaded`);
    console.log(' ');



    /*
    3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
    - Класс "super_element" присутствует в элементе "div".
    - сообщение должно определять присутствует или отсутствует класс "super_element"
    - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
    - которому был совершен клик.
    - Необходимо использовать делегирование.
    */

    // console.log(`TASK 3`);

    const bodyEl_1 = document.querySelector('body');
    bodyEl_1.addEventListener('click', function (e) {
        const superEl_1 = bodyEl_1.querySelector('.super_element');
        if (superEl_1) {
            console.log(`TASK 3`);
            console.log(`Класс "super_element" присутствует в элементе ${superEl_1}`);
            console.log(`task_3: Click on: ${e.target.localName.toLowerCase()}`);
            console.log(e.target);
        }
    });

    // console.log(' ');


    /*
    4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение:
    "Вы навели на textarea."
    */

    // console.log(`TASK 4`);

    const textAreaEl = bodyEl_1.querySelector('textarea');
    textAreaEl.addEventListener('mouseover', function (e) {
        console.log(`TASK 4`);
        console.log(`Hover on textarea`);
        console.log(` `);
    });

    // console.log(' ');


    /*
    5. Необходимо повесить событие клика на тег ul.
    В обработчике события в консоль необходимо выводить текст,
    который записан внутри элемента кнопки, по которой был произведен клик.
    Если клик был не по кнопке, то ничего выводить не нужно.
    Необходимо использовать делегирование.
    */


    const ulEl_5 = bodyEl_1.querySelector('ul');
    ulEl_5.addEventListener('click', function (e) {
        if (e.target.localName.toLowerCase() === 'button') {
            console.log(`\nTASK 5`);
            console.log(`task_5: Click on: ${e.target.innerHTML}`);
        }
    });

    // console.log(' ');


    /*
    6. Вопрос: Почему в console.log пишется сначала текст из 5 задания
    и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul?
    Ответ необходимо написать здесь же, под этим комментарием, своими словами.
    */

    console.log(`TASK 6`);

    /*
    -body    (listener task_3)
    --ul     (listener task_5)
    ----li
    ------button
    */

    console.log('ОТВЕТ: Слушатель событий для 3 задания - на body, для 5 задания - на ul. Фаза захвата кнопки будет одинаковой от window до button. При фазе всплытия от кнопки наверх первым сработает обработчик события на ul. Результат задания 5 появится быстрее. Только потом сработает обработчик события на body (задание 3).');
    console.log(' ');


    /*
    7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
    */

    console.log(`TASK 7`);

    const liEls = ulEl_5.querySelectorAll('li');
    for (let i = 1; i < liEls.length; i += 2) {
        liEls[i].classList.add('bg');
    }

    console.log(liEls);
    console.log(' ');

});

window.onload = () => {

    /*
    2. Необходимо вывести сообщение в консоль "страница загрузилась",
    когда все ресурсы страницы будут загружены.
    */

    console.log(`TASK 2`);
    console.log(`Page downloaded`);
    console.log(' ');

};



