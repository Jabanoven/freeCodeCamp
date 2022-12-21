let value;

// number to string
value = String(10);
value = (20).toString();

// Boolean to string
value = String(true);


// Array to string
value = String([1, 2, 3]);

// Object to string
value = String({
  name: "Alex",
  secondName: "Jabanoven"
});

// String to number
value = Number('25');
value = parseInt("233xxw"); /* для целых чисел */
value = parseFloat("22.4453"); /* для дробных чисел */

// Boolean
value = Boolean("point"); // если строка не пустая - true
value = Boolean(""); // если строка абсолютно пустая (без пробелов и тд) - false
value = Boolean(15); // true
value = Boolean(0); // false
value = Boolean(undefined); //false
value = Boolean(null); //false
value = Boolean({}); //true
value = Boolean([]); //true



console.log(value);
console.log(typeof value);