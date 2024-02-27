/* Задание 1 (тайминг 20 минут)
Текст задания
1. Создайте массив с элементами 1, 2, 3. Выведите на экран
каждый из этих элементов.
2. Создайте массив с произвольными элементами.
Выведите на экран количество элементов в этом
массиве.
3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
первого элемента число 1, вместо второго - 2, вместо
третьего - 3.
*/


// 1
console.log(`TASK 1_1`);

const arr_1_1 = [1, 2, 3];
for (let i = 0; i < arr_1_1.length; i++) {
    console.log(arr_1_1[i]);
}
console.log(` `);


// 2
console.log(`TASK 1_2`);

const arr_1_2 = ["str1", 2, 3, "str2"];
console.log(`Length: ${arr_1_2.length} symbols`);
console.log(` `);


// 3
console.log(`TASK 1_3`);

const arr_1_3 = ['a', 'b', 'c'];

console.log(`Before:`);
console.log(arr_1_3);

console.log(`After:`);
for (let i = 0; i < arr_1_3.length; i++) {
    arr_1_3[i] = i + 1;
}
console.log(arr_1_3);
console.log(` `);



/* Задание 2 (тайминг 15 минут)
1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
увеличьте каждый элемент массива на единицу.
2. Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
3. Пусть дан такой массив:
const arr = [1, 2, 3];
Добавьте ему в конец элементы 4 и 5.
4. Создайте произвольный массив из 5 элементов, Удалите из него два
элемента. Проверьте, какое станет значение свойства length после
этого.
*/


// 1
console.log(`TASK 2_1`);

const arr_2_1 = [1, 2, 3];

console.log(`Before:`);
console.log(arr_2_1);

console.log(`After:`);
for (let i = 0; i < arr_2_1.length; i++) {
    arr_2_1[i]++;
}
console.log(arr_2_1);
console.log(` `);


// 2
console.log(`TASK 2_2`);

const arr_2_2 = [];
arr_2_2[3] = 'a';
arr_2_2[8] = 'b';

console.log(`Length: ${arr_2_2.length} symbols`);
console.log(`Result:`);
console.log(arr_2_2);
console.log(` `);


// 3
console.log(`TASK 2_3`);

const arr_2_3 = [1, 2, 3];
console.log(`Before:`);
console.log(arr_2_3);

arr_2_3.push(4);
arr_2_3.push(5);
console.log(`After:`);
console.log(arr_2_3);
console.log(` `);


// 4
console.log(`TASK 2_4`);

const arr_2_4 = ["str1", 2, 3, "str2", 0, 9, 10];
console.log(`Before:`);
console.log(arr_2_4);
console.log(`Length: ${arr_2_4.length} symbols`);

arr_2_4.pop();
arr_2_4.pop();
console.log(`After:`);
console.log(arr_2_4);
console.log(`Length: ${arr_2_4.length} symbols`);
console.log(` `);


/* Задание 3 (тайминг 25 минут)
1. С помощью цикла for выведите в консоль числа от 11 до 33.
2. С помощью цикла for выведите в консоль нечетные числа в
промежутке от 1 до 99.
3. С помощью цикла for выведите в консоль числа от 100 до 0.
4. Дано число num с неким начальным значением. Умножайте его на 3
столько раз, пока результат умножения не станет больше 1000.
Какое число получится? Посчитайте количество итераций,
необходимых для этого.
*/


// 1
console.log(`TASK 3_1`);

for (let i = 11; i < 34; i++) {
    console.log(i);
}
console.log(` `);


// 2
console.log(`TASK 3_2`);

for (let i = 1; i < 100; i += 2) {
    console.log(i);
}
console.log(` `);


// 3
console.log(`TASK 3_3`);

for (let i = 100; i >= 1; i--) {
    console.log(i);
}
console.log(` `);


// 4
console.log(`TASK 3_4`);
let num = 2;
let maxNum = 1000;
let mult = 5;
let count = 0;

while (num <= maxNum) {
    num *= mult;
    count += 1;
}

console.log(`num = ${num}, count = ${count}`);
console.log(` `);



/* Задание 4 (тайминг 25 минут)
1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
Выведите в консоль те элементы массива, которые больше 3-х, но
меньше 10.
2. Найдите сумму четных чисел от 2 до 100.
3. Дан массив const = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов этого массива.
4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
5. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
который будет по очереди выводить элементы этого массива в
консоль до тех пор, пока не встретится элемент со значением 0.
После этого цикл должен завершить свою работу.
*/


// 1
console.log(`TASK 4_1`);

const arr_4_1 = [2, 5, 9, 15, 1, 4];
console.log(arr_4_1);
for (let i = 0; i < arr_4_1.length; i++) {
    if (arr_4_1[i] > 3 && arr_4_1[i] < 10) {
        console.log(arr_4_1[i]);
    }
}
console.log(` `);


// 2
console.log(`TASK 4_2`);

let sum = 0;
for (let i = 2; i <= 100; i += 2) {
    sum += i;
}
console.log(`even sum from 2 to 100: ${sum}`);
console.log(` `);


// 3
console.log(`TASK 4_3`);

const arr_4_3 = [2, 5, 9, 3, 1, 4];
sum = 0;
for (let i = 0; i < arr_4_3.length; i++) {
    sum += arr_4_3[i];
}
console.log(`sum = ${sum}`);
console.log(` `);


// 4
console.log(`TASK 4_4`);
let str_4_4 = '-';
for (let i = 1; i <= 9; i++) {
    str_4_4 += `${i}-`;
}
console.log(str_4_4);
console.log(` `);


// 5
console.log(`TASK 4_5`);

const arr_4_5 = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < arr_4_5.length; i++) {
    if (arr_4_5[i] != 0) {
        console.log(arr_4_5[i]);
    } else {
        break;
    }
}
console.log(` `);



/* Задание 5 (тайминг 25 минут)
1. Пусть у нас дан массив состоящий из 10 элементов с
произвольными числами. Давайте переберем его циклом и числа,
которые делятся на 2, возведем в квадрат и выведем в консоль, а
числа, которые делятся на 3, возведем в куб и выведем в консоль.
2. С помощью двух вложенных циклов выведите на экран следующую
строку:
3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
Подсчитайте количество цифр 3 в этом массиве.
4. Дан следующий массив:
[1, 2, 3, 4, 5]
С помощью метода splice преобразуйте массив в следующий:
[1, 4, 5]
*/


// 1
console.log(`TASK 5_1`);

const arr_5_1 = [1, 2, 3, 4, 5, 6, 3, 2, 3];
console.log(arr_5_1);
for (let i = 0; i < arr_5_1.length; i++) {
    if (arr_5_1[i] % 2 === 0) {
        console.log(`${arr_5_1[i]} ^ 2 = ${arr_5_1[i] ** 2}`);
    }
    if (arr_5_1[i] % 3 === 0) {
        console.log(`${arr_5_1[i]} ^ 3 = ${arr_5_1[i] ** 3}`);
    }
}
console.log(` `);


// 2
console.log(`TASK 5_2`);

console.log(` `);


// 3
console.log(`TASK 5_3`);

const arr_5_3 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
console.log(arr_5_3);
let count_5_3 = 0;
for (let i = 0; i < arr_5_3.length; i++) {
    if (arr_5_3[i] === 3) {
        count_5_3++;
    }
}
console.log(`count_3 = ${count_5_3}`);
console.log(` `);


// 4
console.log(`TASK 5_4`);

const arr_5_4 = [1, 2, 3, 4, 5];
console.log(`Before:`);
console.log(arr_5_4);

arr_5_4.splice(1, 2);
console.log(`After:`);
console.log(arr_5_4);
