/* Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

console.log(`TASK 1`);

let str_1 = '';
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        str_1 = 'это ноль';
    } else if (i % 2 === 0) {
        str_1 = 'четное число';
    } else {
        str_1 = 'нечетное число';
    }
    console.log(`${i} - ${str_1}`);
}

console.log(' ');


/* Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/

console.log(`TASK 2`);

const arr_2 = [1, 2, 3, 4, 5, 6, 7];
console.log(`Before:`);
console.log(arr_2);

arr_2.splice(3, 2);
console.log(`After:`);
console.log(arr_2);
console.log(' ');


/* Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/

console.log(`TASK 3`);

const arr_3 = [];
let lengthArr = 5;

for (let i = 0; i < lengthArr; i++) {
    arr_3.push(parseInt(Math.random() * 10));
}
console.log(`arr: [${arr_3}]`);

let sum_3 = 0;
let minEl = arr_3[0];
let hasNum = false;

for (let i = 0; i < arr_3.length; i++) {
    sum_3 += arr_3[i];
    if (arr_3[i] < minEl) {
        minEl = arr_3[i];
    }
    if (hasNum === false && arr_3[i] === 3) {
        hasNum = true;
    }
}
console.log(`sum: [${sum_3}]`,
    `\nmin: [${minEl}]`,
    `\n${hasNum ? 'Содержит 3' : 'Не содержит 3'}`);


/* * Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

const symb = 'x';
const rows = 20;

for (let i = 0; i < rows; i++) {
    console.log(symb.repeat(i) + '\n');
}
