/* Задание 1 (тайминг 20 минут)

1. Создайте объект с ключами от 1 до 7, в качестве
значений содержащий имена дней недели. Выведите на
экран “Вторник”
*/

console.log(`TASK 1_1`);

const task_1_1 = {
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday",
    "7": "Sunday"
}

console.log(task_1_1[2]);
console.log(` `);

/* 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
Выведите на экран фамилию, имя и возраст через дефис.
*/

console.log(`TASK 1_2`);

const user = {
    "name": "Ivan",
    "surname": "Ivanov",
    "age": 30
}

console.log(`${user.name} - ${user.surname} - ${user.age}`);
console.log(` `);

/* 3. Добавьте в объект user свойство отчество, которое
пользователь должен ввести с клавиатуры
*/

console.log(`TASK 1_3`);

user.patronymic = prompt("Enter your patronymic: ");
console.log(`${user.name} - ${user.patronymic} - ${user.surname} - ${user.age}`);
console.log(` `);

/* 4. Удалите свойство surname
*/

console.log(`TASK 1_4`);

delete user.surname;
console.log(`${user.name} - ${user.patronymic} - ${user.surname} - ${user.age}`);
console.log(` `);


/* Задание 2 (тайминг 25 минут)
1. Даны два массива: первый с названиями дней недели, а второй - с
их порядковыми номерами:
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
С помощью цикла создайте объект, ключами которого будут
названия дней, а значениями - их номера.
*/

console.log(`TASK 2_1`);

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

const task_2_1 = {};

for (let i = 0; i < arr1.length; i++) {
    task_2_1[arr1[i]] = arr2[i];
}

console.log(task_2_1);
console.log(` `);

/* 2. const obj = {x: 1, y: 2, z: 3};
Переберите этот объект циклом и возведите каждый элемент
этого объекта в квадрат.
*/

console.log(`TASK 2_2`);

const obj = { x: 1, y: 2, z: 3 };
console.log(`Before:`);
console.log(obj);

for (let key in obj) {
    obj[key] = obj[key] ** 2;
}

console.log(`After 1:`);
console.log(obj);

for (let [key, value] of Object.entries(obj)) {
    obj[key] = value ** 2;
}

console.log(`After 2:`);
console.log(obj);

console.log(` `);


/* Задание 3 (тайминг 15 минут)
const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
Найдите сумму элементов приведенного объекта.
*/

console.log(`TASK 3_1`);

const obj_3_1 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

let sum_3_1 = 0;

for (let [key, value] of Object.entries(obj_3_1)) {
    for (let [subkey, subvalue] of Object.entries(value)) {
        sum_3_1 += subvalue;
    }
}

console.log(obj_3_1);
console.log(`sum = ${sum_3_1}`);
console.log(` `);


/* Задание 4 (тайминг 30 минут)
1. Создайте объект riddles
2. Добавьте свойства question, answer
3. создайте метод askQuestion который спрашивает у пользователя
вопрос question и сравнивает ответ с answer
4. Если ответил неверно, то в консоль выводится текст: “вы
проиграли”
5. * По желанию, создать 2 подсказки, если пользователь ответил неверно
*/

console.log(`TASK 4`);

const riddles = {
    question: "Kak menya zovut?",
    answer: "Misha",
    tries: 0,
    askQuestion: function (str = '') {
        let userAnswer = prompt(str + this.question);
        if (userAnswer === this.answer) {
            console.log("Win! :)")
        } else {
            console.log("Lose :(")
            this.tries++;
            if (this.tries <= 3) {
                this.askQuestion("Poprobuy eshe raz. ");
            }
        }
    }
}

riddles.askQuestion();
console.log(` `);
