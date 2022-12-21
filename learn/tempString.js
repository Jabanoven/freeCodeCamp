/* ШАБЛОННЫЕ СТРОКИ */

/* const firstName = 'Aleksey';
const lastName = 'Jabanoven';
const age = 27;

let str;

str = 'Hello my name is ' + `${firstName}` + ` ${lastName}`;

console.log(str); */


/* 
Получить первую и последнюю буквы строки +
Сделать первую и последнюю буквы в верхнем регистре +
Найти положение слова ‘string’ в строке +
Найти положение второго пробела (“вручную” ничего не считать) +
Получить строку с 5-го символа длиной 4 буквы +
Получить строку с 5-го по 9-й символы +
Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов) +

Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016” + */

let string = "some test string";

result = string[0];
result = string[string.length - 1];
result = `${string[0].toUpperCase()}${string.slice(1,-1)}${string[string.length - 1].toUpperCase()}`;
result = string.indexOf('string');
const firstSpace = string.indexOf(' ');
const secondSpace = string.indexOf(' ', firstSpace + 1);

result = string.slice(5, 9);
result = string.slice(5, 10);

result = string.slice(0, -6);

let a = 20;
let b = 16;
result = `${a}${b}`;

console.log(typeof result);