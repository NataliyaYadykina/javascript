/* Задание 1 (тайминг 20 минут)
Текст задания
1. Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию)
2. Создайте функцию которая возводит переданное число в
квадрат
3. Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'.
*/


// 1)
console.log(`Task 1.1\n`);

let firstname = 'Nataliya';
let lastname = 'Yadykina';
let age = 36;

const hello = function (firstname, lastname, age) {
    return `Hello, ${firstname} ${lastname}. You are ${age}.`;
}

console.log(hello(firstname, lastname, age));
console.log(' ');


// 2)
console.log(`Task 1.2\n`);

let number = 3;

// function sqr() {
//     console.log(`${number} ^ 2 = ${number ** 2}`);
// }

const sqr = x => `${x} ^ 2 = ${x ** 2}`;

console.log(sqr(number));
console.log(' ');


// 3)
console.log(`Task 1.3\n`);

// function checkPositive() {
//     console.log(`${number} - ${(number > 0 ? '+++' : '---')}`);
// }

// const checkPositive = x => console.log(`${x} - ${(x > 0 ? '+++' : '---')}`);

const checkPositive = x => {
    let res = `${x} - ${(x > 0 ? '+++' : '---')}`;
    return res;
}

console.log(checkPositive(number));
console.log(' ');



/* Задание 2 (тайминг 15 минут)
1. Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.
2. С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
1. Дана фукнция
function func(num = 5) {
    console.log(num * num);
}
Расскажите, каким будет результат каждого из вызовов функции.
func(2);
func(3);
func();
*/


// 1)
console.log(`Task 2.1\n`);

let param1 = 1;
let param2 = 2;
let param3 = 3;

function sumNumbers(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum;
}

console.log(sumNumbers(param1, param2, param3));
console.log(' ');


// 2)
console.log(`Task 2.2\n`);

function func(num = 5) {
    console.log(num * num);
}

func(2); // 4
func(3); // 9
func(); // 25
console.log(' ');



/* Задание 3 (тайминг 15 минут)
1. Сделайте функцию, которая параметром принимает число, а
возвращает квадратный корень из этого числа. С помощью этой
функции найдите корень числа 3, затем найдите корень числа 4.
Просуммируйте полученные результаты и выведите их в консоль.
2. Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции
*/


// 1)
console.log(`Task 3.1\n`);

function calcSqr(num) {
    return num ** 0.5;
}

let sqr1 = calcSqr(3);
let sqr2 = calcSqr(4);

console.log(`${sqr1.toFixed(2)} + ${sqr2.toFixed(2)} = ${(sqr1 + sqr2).toFixed(2)}`);
console.log(' ');


// 2)
console.log(`Task 3.2\n`);

function findMin(num1, num2) {
    return (num1 <= num2) ? num1 : num2;
}

console.log(`Min (${param1}, ${param2}) = ${findMin(param1, param2)}`);
console.log(' ');



/* Задание 4 (тайминг 25 минут)
1. Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
2. Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван)
*/


// 1)
console.log(`Task 4.1\n`);

let weekDay = parseInt(Math.random() * 7) + 1;

function checkWeekDay(numberWeekDay) {
    if (numberWeekDay < 1 || numberWeekDay > 7) {
        throw new Error('Error - incorrect number of day!');
    }
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[numberWeekDay - 1];
}

console.log(`Day with number ${weekDay} is ${checkWeekDay(weekDay)}`);
console.log(' ');


// 2)
console.log(`Task 4.2\n`);

const helloTime = (userName) => {
    let result = null;
    let hour = new Date().getHours();
    if (hour >= 4 && hour < 10) {
        result = `Доброе утро, ${userName}`;
    } else if (hour >= 10 && hour < 16) {
        result = `Добрый день, ${userName}`;
    } else if (hour >= 16 && hour < 22) {
        result = `Добрый вечер, ${userName}`;
    } else {
        result = `Доброй ночи, ${userName}`;
    }
    return result;
}

console.log(helloTime('Nataliya'));
console.log(Date());