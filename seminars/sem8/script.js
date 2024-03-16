document.addEventListener("DOMContentLoaded", function () {

    /*
    1. В html создать кнопку button
    После загрузки страницы вывести в консоль текст “страница загрузилась”
    Добавить событие onclick которое выводит в консоль текст “событие onclick”
    Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
    */

    console.log(`Page downloaded`);

    console.log(`TASK 1`);

    const divContainer = document.querySelector('div.container');
    const divContainer_1 = document.createElement('div');
    divContainer_1.setAttribute('class', 'task_1')
    divContainer_1.innerHTML = "<h3>Task_1</h3>"
    divContainer.appendChild(divContainer_1);

    const buttonEl_1 = document.createElement('button');
    buttonEl_1.innerText = 'Button_1';
    divContainer_1.appendChild(buttonEl_1);

    buttonEl_1.onclick = () => console.log('\nTASK_1.onclick:\nEvent onclick');

    buttonEl_1.addEventListener('click', function (e) {
        console.log('Event addEventListener');
    });

    console.log(' ');


    /*
    2. Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
    Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
    Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали
    и количество нажатий на эту кнопку выводит в консоль
    Создать кнопку button с текстом 5, При клике на которую,
    меняется текст данной кнопки на “Вы нажали на эту кнопку”
    */

    console.log(`TASK 2`);

    const divContainer_2 = document.createElement('div');
    divContainer_2.setAttribute('class', 'task_2')
    divContainer_2.innerHTML = "<h3>Task_2</h3>"
    divContainer.appendChild(divContainer_2);

    const buttonEl_2_1 = document.createElement('button');
    buttonEl_2_1.innerText = 'Button_2_1';
    const buttonEl_2_2 = document.createElement('button');
    buttonEl_2_2.innerText = 'Button_2_2';
    const buttonEl_2_3 = document.createElement('button');
    buttonEl_2_3.innerText = 'Button_2_3';
    divContainer_2.appendChild(buttonEl_2_1);
    divContainer_2.appendChild(buttonEl_2_2);
    divContainer_2.appendChild(buttonEl_2_3);

    let clickFunc_2 = function (e) {
        console.log(e.target.innerHTML);
    };

    buttonEl_2_1.addEventListener('click', clickFunc_2);
    buttonEl_2_2.addEventListener('click', clickFunc_2);
    buttonEl_2_3.addEventListener('click', clickFunc_2);

    const buttonEl_2_4 = document.createElement('button');
    buttonEl_2_4.innerText = 'Button_2_4';
    divContainer_2.appendChild(buttonEl_2_4);

    let counter_2 = 0;

    let clickCountFunc_2 = function (e) {
        counter_2++;
        console.log(`Click on ${e.target.innerHTML} - ${counter_2}`);
    };

    buttonEl_2_4.addEventListener('click', clickCountFunc_2);

    const buttonEl_2_5 = document.createElement('button');
    buttonEl_2_5.innerText = 'Button_2_5';
    divContainer_2.appendChild(buttonEl_2_5);

    buttonEl_2_5.addEventListener('click', function (e) {
        console.log(`You click on this button - ${e.target.innerHTML}.`);
        e.target.innerHTML = "You clicked on this button";
    });

    console.log(' ');


    /*
    3. Создать кнопку, которая добавляем заголовок h1 с текстом,
    “Новый заголовок, данный элемент нужно расположить после кнопки
    Создать вторую кнопку, которая будет удалять созданный заголовок h1
    Создать третью кнопку, при наведении на которую в консоль будет
    выводиться текст “вы навели на данную кнопку” ,
    как только вы убираем курсор мыши с кнопки,
    в консоли должен появиться текст “Наведения на кнопку больше нет”
    */

    console.log(`TASK 3`);

    const divContainer_3 = document.createElement('div');
    divContainer_3.setAttribute('class', 'task_3')
    divContainer_3.innerHTML = "<h3>Task_3</h3>"
    divContainer.appendChild(divContainer_3);

    const buttonEl_3_1 = document.createElement('button');
    buttonEl_3_1.innerText = 'Add H1';
    divContainer_3.appendChild(buttonEl_3_1);

    buttonEl_3_1.addEventListener("click", function (e) {
        const h1El_3 = document.createElement('h1');
        h1El_3.innerText = "New title";
        buttonEl_3_1.insertAdjacentElement('afterend', h1El_3);
    });

    const buttonEl_3_2 = document.createElement('button');
    buttonEl_3_2.innerText = 'Delete H1';
    divContainer_3.appendChild(buttonEl_3_2);

    buttonEl_3_2.addEventListener('click', function (e) {
        let h1El_3_1 = document.querySelector('div.task_3>h1');
        if (h1El_3_1) {
            h1El_3_1.remove();
        } else {
            console.log('No h1. Create it.');
        }
    });

    const buttonEl_3_3 = document.createElement('button');
    buttonEl_3_3.innerText = 'Button_3_3';
    divContainer_3.appendChild(buttonEl_3_3);

    buttonEl_3_3.addEventListener('mouseover', function (e) {
        console.log(`вы навели на данную кнопку - ${e.target.innerHTML}`);
    });

    buttonEl_3_3.addEventListener('mouseleave', function (e) {
        console.log(`Наведения на кнопку больше нет - ${e.target.innerHTML}`);
    });

    console.log(' ');


    /*
    4. Создать в html список состоящий из 3-х произвольных элементов li
    Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
    Создать кнопку, которая будет удалять первый элемент из созданного списка
    Создать кнопку, при клике на которую ей добавляется класс “click”
    */

    console.log(`TASK 4`);

    const divContainer_4 = document.querySelector('div.task_4');

    const buttonEl_4_1 = document.createElement('button');
    buttonEl_4_1.innerText = 'Add list item';
    divContainer_4.appendChild(buttonEl_4_1);

    buttonEl_4_1.addEventListener('click', function (e) {
        const newListItem_4 = document.createElement('li');
        newListItem_4.setAttribute('class', 'list_item');
        newListItem_4.innerHTML = 'new list item';
        const ulEl_4 = document.querySelector('ul.list');
        ulEl_4.insertAdjacentElement('beforeend', newListItem_4);
    });

    const buttonEl_4_2 = document.createElement('button');
    buttonEl_4_2.innerText = 'Delete first list item';
    divContainer_4.appendChild(buttonEl_4_2);

    buttonEl_4_2.addEventListener('click', function (e) {
        const liEls = document.querySelectorAll('li');
        if (liEls.length > 0) {
            liEls[0].remove();
        } else {
            console.log('No list item. Create it.');
        }
    });

    const buttonEl_4_3 = document.createElement('button');
    buttonEl_4_3.innerText = 'Add class';
    divContainer_4.appendChild(buttonEl_4_3);

    buttonEl_4_3.addEventListener('click', function (e) {
        e.target.classList.add('click');
    });

    console.log(' ');


    /*
    5. Дан тег <div class="content"></div> 
    Создайте с помощью javascript новый элемент button
    Добавьте текст для кнопки “Отправить”
    При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
    */

    console.log(`TASK 5`);



    console.log(' ');

});
