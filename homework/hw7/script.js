/*
1. Ко всем элементам, имеющим класс "dropdown-item"
добавить еще один класс "super-dropdown",
необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
*/

console.log(`TASK 1`);

const dropdownItemEls_1 = document.querySelectorAll('a.dropdown-item');
dropdownItemEls_1.forEach(element => {
    element.setAttribute("class", element.classList + " super-dropdown");
});
console.log(dropdownItemEls_1);

console.log(' ');


/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary",
если он присутствует у этого элемента,
либо добавить, если такого класса у элемента не было.
*/

console.log(`TASK 2\nКликни по кнопке для изменения класса`);

const btnEl_2 = document.querySelector("button.btn");
console.log(btnEl_2);
btnEl_2.addEventListener("click", () => {
    btnEl_2.classList.toggle('btn-secondary');
    console.log(`btn.onclick - TASK 2`);
    console.log(btnEl_2);
});

console.log(' ');


/*
3. Необходимо удалить класс "dropdown-menu" у элемента,
у которого присутствует класс "menu".
*/

console.log(`TASK 3`);

const dropdownMenuEl_3 = document.querySelectorAll(".dropdown-menu");
console.log(dropdownMenuEl_3);
dropdownMenuEl_3.forEach(element => {
    if (element.classList.contains('menu')) {
        element.classList.remove('dropdown-menu');
    }
});
console.log(dropdownMenuEl_3);

console.log(' ');


/*
4. Используя метод insertAdjacentHTML
добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
*/

console.log(`TASK 4`);

const dropdownEl_4 = document.querySelector("div.dropdown");
dropdownEl_4.insertAdjacentHTML("afterend", '<a href="#">link</a>');
console.log(dropdownEl_4.parentElement);

console.log(' ');


/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/

console.log(`TASK 5`);

const dropdownMenuButtonEl_5 = document.querySelector("#dropdownMenuButton");
dropdownMenuButtonEl_5.setAttribute("id", "superDropdown");
console.log(dropdownMenuButtonEl_5);

console.log(' ');


/*
6. Добавьте атрибут data-dd со значением 3 элементу
у которого существует атрибут "aria-labelledby"
равный "dropdownMenuButton" используя dataset.
*/

console.log(`TASK 6`);

const dropdownMenuButtonEl_6 = document.querySelector("[aria-labelledby=dropdownMenuButton]");
dropdownMenuButtonEl_6.setAttribute("data-dd", "3");
console.log(dropdownMenuButtonEl_6);

console.log(' ');


/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/

console.log(`TASK 7`);

const dropdownToggleEl_7 = document.querySelector("button.dropdown-toggle");
dropdownToggleEl_7.attributes.removeNamedItem("type");
console.log(dropdownToggleEl_7);

console.log(' ');
