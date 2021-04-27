//Object oriented programming

//Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}
//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mike', 'Arrow', '4-3-1970');
const person3 = new Person('Anna', 'Mayer', '30-12-2002');

console.log(person2.dob.getFullYear);


