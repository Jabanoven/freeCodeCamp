/* ОБЪЕКТЫ */

const obj = {
  product: "iphone",
  'isAdmin': false
};

obj.price = 1000;
obj.currency = 'dollar';
obj.details = {};
obj.details.model = 13;
obj.details.color = "Midnight black";

let first = obj.product; // 1 способ найти значение по ключу
// let second = obj['isAdmin']; // 2 способ найти значение по ключу

let prop = 'details';
let result = obj[prop]; // 3 способ можно обратиться через созданную переменную

console.log(obj, first, second, result);
