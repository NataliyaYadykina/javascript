/*
1. Дан макет
https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/sh
op-(Copy)-(Copy)?node-id=73%3A140 в котором
представлены товары на странице корзины
2. Необходимо создать файл data.js в котором создать
переменную dataProducts в которую присвоить JSON
данные по товарам.
3. Вам нужно самостоятельно создать JSON данные (не
забыть про кавычки для ключей и значений
4. Добавить все данные из макета, чтобы в дальнейшим по
ним мы смогли создать вёрстку
*/

console.log(`TASK 1`);

const parseData = JSON.parse(data);

const container = document.querySelector('div.container');
const template = news_template.content;
parseData.forEach(element => {
    const newTemplate = template.cloneNode(true);
    newTemplate.querySelector('img.item__img').src = element.img;
    newTemplate.querySelector('div.item__title').innerHTML = element.title;
    newTemplate.querySelector('span.item__price-red').innerHTML = element.price;
    const color = newTemplate.querySelector('div.item__color');
    color.innerHTML = color.innerHTML + element.color;
    const size = newTemplate.querySelector('div.item__size');
    size.innerHTML = size.innerHTML + element.size;
    const quantity = newTemplate.querySelector('div.item__quantity > input');
    quantity.value = element.quantity;
    container.appendChild(newTemplate);
});

console.log(' ');


/*
2. Задание 2 (тайминг 30 минут)
1. Создаём вёрстку по данному макету
2. Добавляем все теги и стили для них, чтобы получилось
один в один как в макете
3. Пока данные для шаблонизации использовать не нужно
*/

console.log(`TASK 2`);



console.log(' ');


/*
3. Задание 3 (тайминг 40 минут)
1. Создаём блоки с помощью javascript для этого используем данные
из dataProducts
2. Формируем товары на основе нашей вёрстки
3. Проверяем, как будет выглядеть сайт, если в json данных, добавить
еще один объект с товаром (в вёрстке должен появиться еще один
блок, на основе этих данных)
*/

console.log(`TASK 3`);



console.log(' ');