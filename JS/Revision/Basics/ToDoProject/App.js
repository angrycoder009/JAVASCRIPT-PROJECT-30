const myArray =[];

function AddTodo(){
    const input = document.querySelector('.value')
    const retriveValue =input.value
    myArray.push(retriveValue)
    console.log(myArray)
    input.value = ''
}
