/*
1. Найти по id, используя getElementById, элемент
с id равным "super_link" и вывести этот элемент в консоль.
*/

console.log(`TASK 1`);

const superLink = document.getElementById('super_link');
console.log(superLink);

console.log(' ');


/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/

console.log(`TASK 2`);

const cardLinks = document.querySelectorAll('.card-link');
cardLinks.forEach(element => {
    element.innerHTML = 'ссылка';
    console.log(element);
});

console.log(' ');


/*
3. Найти все элементы на странице с классом "card-link",
которые лежат в элементе с классом "card-body"
и вывести полученную коллекцию в консоль.
*/

console.log(`TASK 3`);

const cardLinksInCardBody = document.querySelectorAll('.card-body > .card-link');
console.log(cardLinksInCardBody);

console.log(' ');


/*
4. Найти первый попавшийся элемент на странице у которого есть
атрибут data-number со значением 50 и вывести его в консоль.
*/

console.log(`TASK 4`);

const dataNumber = document.querySelector('[data-number="50"]');
console.log(dataNumber);

console.log(' ');


/*
5. Выведите содержимое тега title в консоль.
*/

console.log(`TASK 5`);

const titleEl = document.querySelector('title');
console.log(dataNumber.innerHTML);

console.log(' ');


/*
6. Получите элемент с классом "card-title"
и выведите его родительский узел в консоль.
*/

console.log(`TASK 6`);

const cardTitleEl = document.querySelector('.card-title');
const cardTitleElParent = cardTitleEl.parentElement;
console.log(cardTitleElParent);

console.log(' ');


/*
7. Создайте тег `p`, запишите внутри него текст "Привет"
и добавьте созданный тег в начало элемента, который имеет класс "card".
*/

console.log(`TASK 7`);

const newP = document.createElement('p');
newP.innerHTML = 'Привет';
const card = document.querySelector('.card');
card.insertAdjacentElement('afterbegin', newP);
console.log(card);

console.log(' ');


/*
8. Удалите тег h6 на странице.
*/

console.log(`TASK 8`);

const h6El = document.querySelector('h6');
h6El.remove();

console.log('Удаление тега со страницы');
