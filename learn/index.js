/* const nameUser = 'Алексей';
const city = 'Санкт-Петербург';
const hello = `Привет, меня зовут ${nameUser} и я из города ${city}!`;

function multByFactor(value, multiplier = 1) {
  return value * multiplier;
}
console.log(multByFactor(5, 6));
console.log(multByFactor(15));

multByFactor = (value, multiplier = 1) => value * multiplier;
console.log(multByFactor(520, 42));
console.log(multByFactor(50));


setTimeout(() => {
  console.log(hello);
}, 5000);

setTimeout(() => {
  console.log(multByFactor(5, 6))
}, 10000); */

/* const newPost = (post, addedAt = Date()) => {
  const newpost2 = {
    ...post,
    addedAt,
    id: firstPost.id + 1
  }
  return newpost2;
};

const firstPost = {
  id: 1,
  author: 'Alex'
};

console.log(newPost(firstPost)); */


/* const myArr = [1, 2, 3];

const res = myArr.map(i => i * 3);

console.log(myArr);
console.log(res); */

/* const userProfile = {
  name: 'Alex',
  age: 28,
  hasArms: true
};

const userInfo = ({
  name,
  hasArms
}) => {
  if (!hasArms) {
    return `У ${name} нет рук`;
  } {
    return `У ${name} есть руки`;
  }

};


console.log(userInfo(userProfile)); */


//закончил на 07:03:20


/* const personOne = {
  name: 'Alex',
  age: 28
};

function increasePersonAge(person) {
  const updatePerson = Object.assign({}, person);
  updatePerson.age += 18;
  return updatePerson;
}

const updatePersonOne = increasePersonAge(personOne);

console.log(personOne);
console.log(personOne.age);
console.log(updatePersonOne);
console.log(updatePersonOne.age); */

