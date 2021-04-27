//for loop
for (i = 0; i < 10; i++) {
  console.log(`The actual value: ${i}`);{}
}

for (i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

//while loop
let i = 0; 
while(i < 10) {
  console.log(`while loop number ${i}`)
  i++
}

//for ... of loop
for(let todo of todos) {
  console.log(todo.id);
}

//forEach, map, filter
todos.forEach(function(todo) {
  console.log(todo.text);
})

const todoText = todos.map(function(todo) {
  return(todo.text);
})

const todoText = todos.filter(function(todo) {
  return todo.isCompleted === true;
});
