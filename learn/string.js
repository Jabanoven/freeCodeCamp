/* ОСНОВНЫЕ МЕТОДЫ РАБОТЫ СО СТРОКАМИ */

const firstName = 'Aleksey';
const lastName = 'Jabanoven';
const age = 27;
const str = 'Hello my name is Aleksey';

let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value += " i am " + age;

value = firstName.length;
value = firstName[2];
value = firstName[4];
value = lastName[lastName.length - 1]; // получаем последний элемент строки
value = firstName[firstName.length - 1];

// методы работы со строкой. Методы возвращают измененное значение, которое мы можем присвоить в переменную. Исходное значение переменной не меняется
value = firstName.toUpperCase();
value = lastName.toLowerCase();

value = str.concat(' not', ' like', ' fish'); //конкантенирует строки через запятую
value = str.indexOf('e', 5); // Вернет индекс части строки, с 5 индекса. (индекс можно ставить любой)
value = str.includes('my'); // Вернет булевое значение

value = str.slice(0, 5); // вырезать часть строки. 2 индекса - с какого по какой (ласт индекс не включен). можно и 1 индекс. Можно и отрицательный индекс (вырезать с конца);

value = str.replace('Aleksey', 'Aleks'); // найти значение и заменить его на другое;


console.log(value);