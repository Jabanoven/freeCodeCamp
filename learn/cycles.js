// while, do while, for, for of, for in

let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log('action');
// } while (i > 0);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

/* let str = 'Hello';
let res = '';

for (let i = 0; i < str.length; i++) {
  res += str[i] + '*';
}

console.log(res);

let colors = ['white', 'yellow', 'blue', 'red'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
} */

const users = [{
    name: 'Aleksey',
    age: 27
  },
  {
    name: 'Maria',
    age: 25
  }
];

const usersObj = {};

for (let i = 0; i < users.length; i++) {
  usersObj[users[i].name] = users[i];
}

console.log(usersObj);