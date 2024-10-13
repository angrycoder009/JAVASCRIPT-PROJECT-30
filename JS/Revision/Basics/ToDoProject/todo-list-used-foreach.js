const myArray = [{
    name : 'make dinner',
     date : '2023-12-9'
}];
renderToDoList();

function renderToDoList() {
    let todolistHtml = '';
    myArray.forEach(function(todoObj ,index){
        const {name,date}=todoObj;
        const html = `
       <div> ${name}</div>
        <div> ${date}</div>
        <button onclick="
        myArray.splice(${index}, 1);
        renderToDoList();
        ">Delete</button>
       
        `;
        todolistHtml += html;  
    })
    // for (let i = 0; i < myArray.length; i++) {
    //     const todoObj = myArray[i];
    //     // const name = todoObj.name
    //     // const date = todoObj.dueDate
    //     const {name,date}=todoObj;
    //     const html = `
    //    <div> ${name}</div>
    //     <div> ${date}</div>
    //     <button onclick="
    //     myArray.splice(${i}, 1);
    //     renderToDoList();
    //     ">Delete</button>
       
    //     `;
    //     todolistHtml += html;
    // }
    // console.log(todolistHtml);
    document.querySelector('.js-todo-lists')
        .innerHTML = todolistHtml;  
}

function AddTodo() {
    const input = document.querySelector('.value');
    const date = document.querySelector('.js-date-input')
    const dueDate = date.value;
    const retriveValue = input.value;
    myArray.push({
        name :retriveValue ,
        date :dueDate
    })
    console.log(myArray);
    input.value = '';
    renderToDoList();
}
