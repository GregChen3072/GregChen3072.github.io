/* alert('Hello World'); */
/* console.log('Hello World');  */

// String, Numbers, Boolean, null, undefined

const name = 'John';
const isCool = true;
const x = null; 
const y = undefined; 
let z; 

let age = 30;
let rating = 4.5;
let score; 

score = 15;

// Template String
/* console.log(`My name is ${name} and I am ${age}`); */

const s = 'Hello World';
const t = 'technology, computers, it, code';
console.log(t.split(', '));
console.log(s.substring(0, 5).toUpperCase());

// Arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears']; 
fruits[3] = 'grapes'; 
fruits.push('mangos'); 
fruits.unshift('strawberries'); 
fruits.pop();

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
console.log(fruits);

const person = {
    firstName: 'John', 
    lastName: 'Doe', 
    age: 30, 
    hobbies: ['music', 'movies', 'sports'], 
    address: {
        street: '50 main st', 
        city: 'Boston', 
        state: 'MA'
    }
};

person.email = 'john@gmail.com';


console.log(person);

todos = [
    {
        id: 1, 
        text: 'Meeting friends', 
        isCompleted: true
    }, 
    {
        id: 2, 
        text: 'Dentist appt', 
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);

// for loops
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text); 
}

for(let todo of todos) {
    console.log(todo.id);
}

// forEach, map, filter
todos.forEach(
    function(todo) {
        console.log(todo.text);
    }
);

const todoTexts = todos.map(
    function(todo) {
        return todo.text;
    }
); 
console.log(todoTexts); 

const todoCompleted = todos.filter(
    function(todo) {
        return todo.isCompleted === true; // === matches the type too. 
    }
).map(
    function(todo) {
        return todo.text;
    }
);
console.log(todoCompleted);

if(age === 30) {
    console.log(age); 
} else if(age > 30 && age < 60) {
    console.log('Age no greater than 30 and less than 60')
} else {
    console.log('else')
}

// switch

// functions

// Constructor function
/* function Person(firstName, lastName, dob) {
    this.firstName = this.firstName; 
    this.lastName = this.lastName; 
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
} */

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate objects
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1);

const btn = document.querySelector('.btn');

/* btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark'); 
}); */

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit); 

function onSubmit(e) {
    e.preventDefault(); 
    //console.log(nameInput.value); 

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error'); 
        msg.innerHTML = 'Please enter all fields'; 

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
            );
        userList.appendChild(li);
        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }

}