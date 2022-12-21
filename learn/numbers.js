// Numbers

const num1 = 10;
const num2 = 20;

let value;

// + - * / операторы
value = num1 + num2;
value += 100; // короткая запись сложения
// value = num1 % 2; // остаток от деления 0
// value = 5 % 2; // остаток от деления 1
value++;
value--;

value = 0.6 + 0.7;
// value = parseFloat(value.toFixed(2)); // округляет число до (знаков)
value = (0.6 * 10 + 0.7 * 10) / 10;

// Math
value = Math.PI;
value = Math.random();
value = Math.round(2.6); // округление в большую или меньшую сторону
value = Math.ceil(2.2); // округление всегда в большую сторону
value = Math.floor(2.8); // округление всегда в меньшую сторону
value = Math.min(2224, 522, 11, 52, 63, 21); // вернет наименьшее число
value = Math.max(2224, 522, 11, 52, 63, 21); // вернет наибольшее число

console.log(value);


/* ДОМАШНЕЕ ЗАДАНИЕ */

// Получить число pi из Math и округлить его до 2-х знаков после точки

number1 = Math.PI;
number1 = number1.toFixed(2);

console.log(number1);

// const pi = Number(Math.PI.toFixed(2)); // решение

// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

let myArr1 = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
let myArr2 = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

console.log(myArr1, myArr2); // верно



/* Работа с Math.random:

a. Получить случайное число и округлить его до двух цифр после запятой

b. Получить случайное целое число от 0 до X. X - любое произвольное число. */

let randomNumber = Number(Math.random().toFixed(2));
console.log(randomNumber);

let randomNumber2 = 20;
randomResult = Math.round(Math.random() * 100);
console.log(randomResult);

// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

number3 = 0.6 + 0.7;
number3 = Number(number3.toFixed(1));
console.log(number3);

//Получить число из строки ‘100$’

let stringToNumber = '100$';
stringToNumber = parseFloat(stringToNumber);
console.log(stringToNumber);

// ИЛИ 2 способ

let numFromStr = parseFloat('100$');
console.log(numFromStr);