/*
Дан макет сайта
https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0
В блоке Featured Items небходимо реализовать шаблон товаров.
Для этого необходимо создать json формат данных по всем товарам.
Из этого файла сформировать блок Featured Items.
Всю вёрстку остальных частей реализовывать не нужно,
если у вас она была сделана на html/css можно использовать,
заново создавать не требуется.
*/

const parseData = JSON.parse(data);

const products_wrap = document.querySelector('div.products__items-wrap');
const template = products__items.content;
parseData.forEach(element => {
    const newTemplate = template.cloneNode(true);
    newTemplate.querySelector('img.products__item-img').src = element.img;
    newTemplate.querySelector('img.products__item-img').alt = element.alt;
    newTemplate.querySelector('h3.products__item__title').innerHTML = element.title;
    newTemplate.querySelector('p.products__item__desc').innerHTML = element.description;
    newTemplate.querySelector('p.products__item__price').innerHTML = element.price;
    products_wrap.appendChild(newTemplate);
});
