/*
1. Задание 1 (тайминг 25 минут)
1. Поиск в интернете (бесплатные api примеры)
2. Найти любые данные, на произвольную тему
3. Установить расширение в браузер “JSON viewer”
4. Пример найденного json объекта
*/

// console.log(`TASK 1`);

// пропустили

// console.log(' ');


/*
2. Задание 2 (тайминг 15 минут)
1. Создать файл data.js
2. Создать переменную dataInfo
3. Добавить несколько данных в dataInfo
*/

console.log(`TASK 2`);

const data = JSON.parse(dataInfo);
console.log(data);
const container = document.querySelector('.container');

data.forEach(element => {
    const divEl_1 = document.createElement('div');
    const title_1 = document.createElement('h2');
    const text_1 = document.createElement('p');
    const imgEl_1 = document.createElement('img');
    title_1.textContent = element.heading;
    text_1.textContent = element.text;
    imgEl_1.src = element.url;
    imgEl_1.style.width = element.width + "px";
    imgEl_1.style.height = element.height + "px";
    divEl_1.appendChild(imgEl_1);
    divEl_1.appendChild(title_1);
    divEl_1.appendChild(text_1);
    divEl_1.setAttribute('class', element.class);
    container.appendChild(divEl_1);
});



console.log(' ');


/*
3. Задание 3 (тайминг 30 минут)
1. Создать файл index.html
2. Подключить data.js
3. Добавить блок <div class="content"></div>
4. Создать переменную data и добавить в нее JSON parse данные из
файла data.js
5. Вывести в консоль объект data
6. С помощью foreach обойти массив data
7. Вывести все изображения из данных
*/

// console.log(`TASK 3`);

// Выполнено выше

// console.log(' ');


/*
4. Задание 4 (тайминг 20 минут)
1. Создать все необходимые заголовки, параграфы изображения (из
данных json)
2. Добавить все содержимое в блок контент
3. Добавить стили при необходимости
*/

// console.log(`TASK 4`);

// Выполнено выше

// console.log(' ');
