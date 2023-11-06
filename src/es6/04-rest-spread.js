// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = {userName: 'Juan', age: 42};
let {userName, age} = user;
console.log(userName, user.age);

// spread operator

let person = {name: 'Juan', age: 42};
let country = 'Arg';

let data = {id:1, ...person, country}
console.log(data);

// rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
