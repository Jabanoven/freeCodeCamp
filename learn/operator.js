// >, < , >=, <=, == , ===, !=, !== 
/* 
let value;

value = 1 > 2;
value = 1 <= 2;
value = 1 == 1;

if (условие) {
  // actions
} else {
  //else actions
}

value = 10;

if (value === 10) {
  console.log('value: 10');
} else {
  console.log('else');
} */

// || && оператор ИЛИ возвращает первое попавшееся true, оператор И возвращает первый попавшийся false или последнее true. Оператор && пытается каждое значение преобразовать к false. Оператор || пытается каждое значение преобразовать к true.

/* let a = 0 || 'string';
console.log(a);

let b = 1 && 'string';
console.log(b);

let c = null || 25;
console.log(c);

let d = null && 25;
console.log(d);

let e = null || 0 || 35;
console.log(e);

let f = null && 0 && 35;
console.log(f); */

/* Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”. */
/* 
let value = 'hidden';

if (value === 'hidden') {
  value = 'visible';
} else {
  value = 'hidden';
}

console.log(value); */

/* Создать переменную и присвойте ей число.

Используя if, записать условие:

- если переменная равна нулю, присвоить ей 1;

- если меньше нуля - строку “less then zero”;

- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись). */

/* let a = 24;

if (a === 0) {
  console.log(a = 1);
} else if (a < 0) {
  console.log('less then zero');
} else {
  console.log(a *= 10);
} */

/* Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.

Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false. */

/* let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false
};

if (car.age > 5) {
  console.log('Need repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}

console.log(car.needRepair); */

/* Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.

Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль. */
/* 
let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%'
};

const price = parseFloat(item.price);
const discount = parseFloat(item.discount);

if (!isNaN(price) && !isNaN(discount)) {
  const priceWithDiscount = price - (price * (discount / 100));
  console.log(priceWithDiscount);
} else {
  console.log(price);
}
 */

/* Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено. */
/* 
let product = {
  name: 'Яблоко',
  price: '14 $'
};

let min = 10; // минимальная цена

let max = 20; // максимальная цена

const productPrice = parseFloat(product.price);

if (productPrice >= min && productPrice <= max) {
  console.log(product.name);
} else {
  console.log('Товаров не найдено');
} */


/* ТЕРНАРНЫЙ ОПЕРАТОР */

/* let a = 1;
let b = 0; */

// if (a > 0) {
//   b = a;
// } else {
//   b += 1;
// }

// выражение ? если true : если false;
// выражение ? если true : выражение ? если true : если false;

/* b = a > 0 ? a : b += 1;

console.log(b); */



// switch используется когда чётко знаем значения
/* let color = 'orange';

switch (color) {
  case "black":
    console.log('color is yellow');
    break;
  case "white":
    console.log('color is white');
    break;
  default:
    console.log('default');
} */

// Записать в виде switch case следующее условие:

/* if (a === 'block') {
  console.log('block');
} else if (a === 'none') {
  console.log('none');
} else if (a === 'inline') {
  console.log('inline');
} else {
  console.log('other');
} */

/* let c = 'block';

switch (c) {
  case "block":
    console.log('block');
    break;
  case "none":
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other');
} */

// Записать данное условие в виде тернарного оператора

// let b = 'hidden';

/* if (b === 'hidden') {
  b = 'visible';
} else {
  b = 'hidden';
} */
/* 
b = b === 'hidden' ? 'visible' : 'hidden';
console.log(b); */



// Записать данное условие в виде тернарного оператора

/* let c = 1;
 */
/* if (c === 0) {
  c = 1;
} else if (c < 0) {
  c = 'less then zero';
} else {
  c *= 10;
} */

/* c = c === 0 ? c = 1 : c < 0 ? 'less then zero' : c *= 10;

console.log(c); */