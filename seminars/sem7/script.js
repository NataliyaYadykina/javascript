/*
<div class="block">

</div>
Дан блок, внутри него необходимо создать элемент div
с классом item, разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px
Добавить данному блоку класс item_1 (использовать setAttribute)
*/

console.log(`TASK 1`);

const blockEl_1 = document.querySelector('div.block');
const itemEl_1 = document.createElement('div');
itemEl_1.setAttribute('class', 'item');
itemEl_1.textContent = 'Элемент внутри';

blockEl_1.appendChild(itemEl_1);
itemEl_1.setAttribute('class', itemEl_1.classList + ' item_1');

console.log(blockEl_1);
console.log(' ');


/*
Дан код
<div class="elem">
  <img src="photo.png" alt="photo">
  <div class="content">
    <h2 class="heading">Lorem, ipsum dolor.</h2>
    <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
  </div>
</div>

Необходимо с помощью querySelector найти параграф с классом text
Вывести в консоль соседний элемент h2
Вывести в консоль родительский элемент content
Вывести в консоль картинку
Вывести в консоль родительский элемент elem
*/

console.log(`TASK 2`);

const pEl_2 = document.querySelector('p.text');
console.log(`Целевой элемент:`);
console.log(pEl_2);
console.log(`соседний элемент h2:`);
console.log(pEl_2.previousElementSibling);
console.log(`родительский элемент content:`);
console.log(pEl_2.parentElement);
console.log(`Вывести в консоль картинку:`);
console.log(pEl_2.parentElement.previousElementSibling);
console.log(`родительский элемент elem:`);
console.log(pEl_2.parentElement.parentElement);

console.log(' ');


/*
<div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей
*/

console.log(`TASK 3`);

const subtitleEl_3 = document.querySelector('h2.subtitle');
console.log(`Целевой элемент:`);
console.log(subtitleEl_3);
console.log(`все его родители:`);
let curEl_3 = subtitleEl_3;
while (curEl_3.parentElement != null) {
    curEl_3 = curEl_3.parentElement;
    console.log(curEl_3);
}

console.log(' ');


/*
<form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал,
если пользователь нажимает на кнопку отправить, а поле ввода пустое,
то под полем ввода и кнопкой должен появиться
заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным
*/

console.log(`TASK 4`);

const inputEl_4 = document.querySelector('form input');
const btnEl_4 = document.querySelector('form button.btn');
btnEl_4.addEventListener("click", () => {
    if (inputEl_4.value === "") {
        const h2El_4 = document.createElement("h2");
        h2El_4.innerText = "Вы не заполнили поле ввода!";
        h2El_4.style.border = "1px solid red";
        document.querySelector("form").insertAdjacentElement('beforeend', h2El_4);
    }
});

console.log(' ');

/*
Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/
