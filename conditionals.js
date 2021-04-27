//Conditionals
const x = 10
if (x == 10) {
  console.log(x)
}

//If ... else if ... else
//multiple else if conditions possible 
//Ternary operator
const x = 10;
const color = x > 10 ? 'red' : 'blue' 

//Arrow function
function addNums(num1 = 1, num2 = 1) => { //1, 1 default values. Actual values can be passed in during runtime
  return num1 + num2;
}
//Arrow function version
const addNums = (num1 = 1, num2 = 1) => { //1, 1 default values. Actual values can be passed in during runtime
  return num1 + num2;
}
//Arrow function short version
const addNums = (num1 = 1, num2 = 1) => num1 + num2; //1, 1 default values. Actual values can be passed in during runtime 
const add5 = num1 = 1 => num1 + 5; //With one parameter parnetheses not needed

console.log(addNums(3,7))
