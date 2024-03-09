/*
<div id="block">
 <p>1</p>
 <p>2</p>
</div>
1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
*/

console.log(`TASK 1`);

const firstParagraph = document.querySelector('div#block > p');
console.log(firstParagraph);

console.log(' ')

/*
2. Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p>
*/

console.log(`TASK 2`);

const firstWwwParagraph = document.querySelector('div#block > p.www');
console.log(firstWwwParagraph);

console.log(' ')

/*
Дан тег <a class="link" href="#">link text html</a>
1. Вам необходимо поменять текст внутри ссылки на “link text js”
Заменить href, на значение https://developer.mozilla.org/ru/ 
*/

console.log(`TASK 3`);

const aEl = document.querySelector('a.link');
aEl.innerHTML = 'link text js';
aEl.href = 'https://developer.mozilla.org/ru/';
console.log(aEl);

console.log(' ');

/*
3. Дан тег <img class="photo" src="" alt=""> 
Вам необходимо с помощью js поменять значение src на любое изображение из интернета
*/

console.log(`TASK 4`);

const imgEl = document.querySelector('img.photo');
imgEl.setAttribute('src', 'https://img.freepik.com/free-photo/beautiful-shot-of-a-white-british-shorthair-kitten_181624-57681.jpg');
console.log(imgEl.getAttribute('src'));

console.log(' ');


/*
Дан тег <div class="content"></div> 
1. Создайте новый элемент p
2. Добавьте в него текст “Новый текстовый элемент”
3. Добавьте созданный элемент внутри <div class="content"></div>
4. Удалите добавленный узел 
*/

console.log(`TASK 5`);

const contentEl = document.querySelector('div.content');
const newParEl = document.createElement('p');
newParEl.textContent = 'Новый текстовый элемент';
contentEl.appendChild(newParEl);
newParEl.remove();

console.log(' ');

/*
Создать элемент button, добавить в блок <div class="content"></div>
При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
*/

console.log(`TASK 6`);

const buttonEl = document.createElement('button');
buttonEl.textContent = 'Кликни много раз!';
contentEl.appendChild(buttonEl);
let countClicksOnButton = 0;
buttonEl.onclick = function () {
    countClicksOnButton++;
    console.log(`CountClicks = ${countClicksOnButton}`);
}

/*
Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/

console.log(' ');
console.log(`TASK 7`);

const buttonEl2 = document.createElement('button');
buttonEl2.textContent = 'Отправить';
contentEl.appendChild(buttonEl2);
buttonEl2.addEventListener("click", (e) => {
    e.target.textContent = 'Текст отправлен';
});

console.log(' ');
