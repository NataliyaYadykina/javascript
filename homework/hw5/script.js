/* Задание 1
Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
*/

console.log(`TASK 1`);

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

console.log(numbers)

for (let [key, value] of Object.entries(numbers)) {
    if (value >= 3) {
        console.log(value);
    }
}

console.log(' ')


/* Задание 2
Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
*/

console.log(`TASK 2`);

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(
    `author: ${post.author}\ndislikes: ${post.comments[0].rating.dislikes}\nuserID: ${post.comments[1].userId}\ntext: ${post.comments[1].text}`
);
console.log(' ')


/* Задание 3
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
*/

console.log(`TASK 3`);

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(element => {
    element['price'] = element['price'] * 0.85;
});
console.log(products);
console.log(' ')


/* Задание 4
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
*/

console.log(`TASK 4`);

const products_4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const products_4_filter = products_4.filter(
    (product) => {
        if (product.photos && product.photos.length > 0) return true
        return false
    }
);

console.log(products_4_filter);
console.log(' ')


/* **Задание 5**
Дано 2 массива 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
Вам необходимо объединить 2 этих массива,
чтобы значения первого массива были ключами,
а значения второго массива — значениями.
*/

console.log(`TASK 5`);

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const en_ru = {}

for (let i = 0; i < en.length; i++) {
    en_ru[en[i]] = ru[i];
}

console.log(en_ru);
console.log(' ');

