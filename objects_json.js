//Objects

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'food', 'travel'],
  address:{
    street: '128 Van Ness',
    city: 'San Francisco',
    state: 'CA'
  }
}

person.firstName.length;
person.hobbies[1];
person.address.city;

const { firstName, lastName, address { city }} = person;
console.log(person)

const todos = [ 
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Bring in stuff',
    isCompleted: false
  },
  {
    id: 3,
    text: 'Shop for food',
    isCompleted: true
  },
  {
    id: 4,
    text: 'Clean the house',
    isCompleted: false
  }
]

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
