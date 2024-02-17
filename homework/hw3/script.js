/* Задание 1
Создайте функцию которая возводит переданное число в куб,
необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/

console.log(`TASK 1`);

const cube = num => `${num} ^ 3 = ${num ** 3}`;

console.log(cube(3));
console.log(cube(4));
console.log(` `);


/* Задание 2
Пользователь вводит с клавиатуры число,
если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа
и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/

console.log(`TASK 2`);

let salary = Number(prompt('Enter your salary:'));

const calcSalaryWithoutTask = salaryAmount => {
    if (typeof salaryAmount === 'number' && !isNaN(salaryAmount)) {
        let result = salaryAmount * 0.87
        return `З/п - ${salaryAmount}.\nРазмер заработной платы за вычетом налогов равен ${result}`;
    } else {
        return `Значение задано неверно!`;
    }
}

console.log(calcSalaryWithoutTask(salary));
console.log(` `);


/* Задание 3
Пользователь с клавиатуры вводит 3 числа,
необходимо создать функцию, которая определяет максимальное значение среди этих чисел
*/

console.log(`TASK 3`);

const getMax = (num1, num2, num3) => {
    let max = num1;
    if (max < max) {
        max = num2;
    }
    if (max < num3) {
        max = num3;
    }
    return `Max (${num1}, ${num2}, ${num3}) = ${max}`;
}

console.log(getMax(0, -7, 9));
console.log(` `);


/* Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/

console.log(`TASK 4`);

const sumNumbers = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;
const diffNumbers = (num1, num2) => `${num1} - ${num2} = ${num1 - num2}`;
const multNumbers = (num1, num2) => `${num1} * ${num2} = ${num1 * num2}`;
const divNumbers = (num1, num2) => `${num1} / ${num2} = ${num1 / num2}`;

console.log(sumNumbers(3, 2));
console.log(diffNumbers(6, 2));
console.log(multNumbers(3, 2));
console.log(divNumbers(15, 3));