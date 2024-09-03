const myArray =[];
renderToDoList();
function renderToDoList(){
let todolistHtml=''
for(let i = 0 ; i <myArray.length;i++){
    const todoList =myArray[i];
    const html = `<p>${todoList}</p>`
    todolistHtml +=html
}
console.log(todolistHtml)
document.querySelector('.js-todo-lists')
    .innerHTML =todolistHtml;
}
function AddTodo(){
    const input = document.querySelector('.value')
    const retriveValue =input.value
    myArray.push(retriveValue)
    console.log(myArray)
    input.value = ''
    renderToDoList();
}
