/* Задание 1
1. Создать новый файл
2. Создать переменную и спросить у пользователя "Ваш возраст"
3. Вывести на экран текст: Вам "возраст пользователя" лет
4. Спросить у пользователя его имя
5. Вывести на экран: Добро пожаловать на сайт, "Имя пользователя"
*/

let userAge = prompt('Ваш возраст?', 36);
let userName = prompt('Ваше имя?', 'Nataliya');
console.log(`Вам ${userAge} лет. Добро пожаловать на сайт, ${userName}!`);


/* Задание 2
1. Найти остаток от деления двух переменных
a. let a = 13;
b. let b = 5;
2. Что выведет на экран (Сначала проговорите, потом проверьте)
a. let a;
b. alert(a);
3. Что выведет на экран (Сначала проговорите, потом проверьте)
a. alert('abc' * 3);
4. Что выведет на экран (Сначала проговорите, потом проверьте)
a. alert( 1 / 0);
b. alert(-1 / 0);
5. Что выведет на экран (Сначала проговорите, потом проверьте)
a. alert('2' * '3');
*/

let a22 = 13;
let b22 = 5;
console.log(`task_22: ${a22} % ${b22} = ${a22 % b22}`);


/*Задание 3
1. Сознательно допустите ошибку в вашем коде. Убедитесь, что
ошибка появляется в консоли. Определите, в какой строке кода
случилась ошибка.
2. Необходимо вывести в консоль результат суммы данных
переменных
a. let a = '2';
b. let b = '3';
3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль
вывести текст
a. Сумма чисел равна “результат”
b. Разность чисел равна “результат”
c. Произведение чисел равно “результат”
d. Частное чисел равно “результат”
e. Остаток от деления чисел равен “результат”
*/

let a23 = '2';
let b23 = '3';
console.log(`task_23: ${a23} + ${b23} = ${a23 + b23}`);

let num23_1 = Number(prompt('Enter number 1:'));
let num23_2 = Number(prompt('Enter number 2:'));
console.log(`task 233:`);
console.log(`${num23_1} + ${num23_2} = ${num23_1 + num23_2}`);
console.log(`${num23_1} - ${num23_2} = ${num23_1 - num23_2}`);
console.log(`${num23_1} * ${num23_2} = ${num23_1 * num23_2}`);
console.log(`${num23_1} / ${num23_2} = ${num23_1 / num23_2}`);
console.log(`${num23_1} % ${num23_2} = ${num23_1 % num23_2}`);


/*Задание 4
1. Не запуская код, определите, что выведется в консоль:
a. console.log(String(true));
2. Не запуская код, определите, что выведется в консоль:
a. console.log('a' + true);
3. Не запуская код, определите, что выведется в консоль:
a. console.log(Number(true));
4. Не запуская код, определите, что выведется в консоль:
a. console.log(true + 1);
5. Не запуская код, определите, что выведется в консоль:
a. console.log(true + true)
6. Не запуская код, определите, что выведется в консоль:
a. console.log(true - true)
7. Не запуская код, определите, что выведется в консоль:
a. console.log( String(true) + Number(true) )
*/


/*Задание 5
1. Пользователь с клавиатуры вводит число, Необходимо создать
условный оператор который
a. Выводит в консоль “Число больше 5”
b. Выводит в консоль “Число меньше 5”
c. Выводит в консоль “Число равно 5”
2. Даны переменные test1 и test2. Проверьте, равны ли их значения и
выведите соответствующее сообщение.
3. Пользовать с клавиатуры вводит 2 числа
a. Необходимо найти какое из двух чисел минимальное
4. Пользователь с клавиатуры вводит число, Проверьте, что данная
переменная больше нуля и меньше 15.*/

let num_t51 = Number(prompt('Enter number:'));
console.log('Task_5_1');
if (typeof num_t51 === 'number' && !isNaN(num_t51)) {
    if (num_t51 > 5) {
        console.log(`${num_t51} > 5`);
    } else if (num_t51 < 5) {
        console.log(`${num_t51} < 5`);
    } else {
        console.log(`${num_t51} = 5`);
    }
} else {
    console.log(`${num_t51} not a number`);
}


let test1 = 3;
let test2 = 4;
console.log('Task_5_2');
console.log((test1 === test2) ? `${test1} = ${test2}` : `${test1} != ${test2}`);

let num_t531 = Number(prompt('Enter number 1:'));
let num_t532 = Number(prompt('Enter number 2:'));
console.log('Task_5_3');
if (num_t531 > num_t532) {
    console.log(`min = ${num_t532}`);
} else if (num_t531 < num_t532) {
    console.log(`min = ${num_t531}`);
} else {
    console.log(`${num_t531} = ${num_t532}`);
}

let num_t54 = Number(prompt('Enter number:'));
console.log('Task_5_4');
console.log((num_t54 > 0 && num_t54 < 15) ? `Yes` : `No`);


var booleanValue = true;
var numericalValue = 354;
var stringValue = "This is a String";
var stringObject = new String("This is a String Object");
console.log(typeof booleanValue) // displays "boolean"
console.log(typeof numericalValue) // displays "number"
console.log(typeof stringValue) // displays "string"
console.log(typeof stringObject) // displays "object"