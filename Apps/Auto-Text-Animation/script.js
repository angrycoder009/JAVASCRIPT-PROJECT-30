//initailize the html
const h1Element = document.querySelector('h1');

//store the value of an array
const elementValue = ['Freelancer','programmer','Web Developer']

//show them inside element
let index = 0
setInterval(()=>{
   
  h1Element.innerHTML =elementValue[index]
  index++
  if(index>=elementValue.length){
    index =0
  }
},3000)