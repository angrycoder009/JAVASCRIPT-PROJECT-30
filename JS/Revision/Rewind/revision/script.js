// var age = 25 

// if(true){
//     console.log(age)
// }

// function solve(){
//     var age = 25 
//     console.log(age)
// }
// solve()
// console.log(age)

// var x = 10 
// var x = 20
// console.log(x)

// {
// let a = 10 
// let a = 59
// console.log(a)
// }

//eventListner()

document.querySelector('button').addEventListener('click',()=>{
    alert('main hun hain')
})
document.querySelector('button').removeEventListener('click',()=>{
    alert('main hun hain')
})


//Create a button that, when clicked,
//  updates a counter displayed on the screen.
//  The counter should increment by 1 each time the button is clicked.
let cnt = 0 ;
const result = document.querySelector('.counter')
document.querySelector('.js-btn-counter').addEventListener('click',()=>{
   cnt+=1;
   result.innerHTML =cnt
})
document.querySelector('.js-btn-change-color').addEventListener('click',()=>{
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    document.body.style.backgroundColor =randomColor
})




///Create an input box that 
// listens for keyboard events and displays
//  the key that was pressed in a p tag below the input field.
document.querySelector('input').addEventListener('keydown',(e)=>{
    document.querySelector('.js-result-key').innerHTML =e.key
})
const image = document.querySelector('.image')
image.querySelector('.image').addEventListener('mouseover',()=>{
image.style.width = '300px'
})
image.addEventListener('mouseout', function() {
    image.style.width = '200px';
  });