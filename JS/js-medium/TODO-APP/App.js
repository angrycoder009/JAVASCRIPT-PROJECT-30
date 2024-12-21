const inputElement = document.querySelector('.input');
const buttonElement = document.querySelector('.add-task');
const displayTaskElement = document.querySelector('.js-show-todo');
const loadTodo=()=>{
    const tasks  = JSON.parse(localStorage.getItem('tasks'))||[];
    tasks.forEach(createTask)
}
const addTodo =()=>{
  const task = inputElement.value.trim();
  if(task){
    createTask(task);
    inputElement.value = '';
    saveTask()
  }

}

const createTask =(task)=>{
  const liElement = document.createElement('li')
  liElement.textContent =task
  displayTaskElement.appendChild(liElement)
   deleteTask(liElement)
}
const deleteTask = (liElement)=>{
    const deleteElement = document.createElement('button')
    deleteElement.textContent = "delete";
    liElement.appendChild(deleteElement)
    deleteElement.addEventListener('click',()=>{
        liElement.remove();
        saveTask();
    })

}

const saveTask = ()=>{
    const tasks = []
    displayTaskElement.querySelectorAll('li').forEach((item)=>{
        tasks.push(item.firstChild.textContent.trim())
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
loadTodo()

buttonElement.addEventListener('click',()=>{
    addTodo();
})