//value is undefinded
console.log('the value of x:' ,x)
var x = 20;
//value is 20
console.log('the value of x:',x)

//function call befor function creation becuase of hoisting
fun()
function fun(){
   console.log('function is hoisted')
   var a = 10
}
console.log(a)

//this happens
//hoisting is a behaviour in js where variable and function declearation are moved to the top  of their scope during compilation phase,
//before code is executed
//however , the value asignment is not hoisted.
//until value is assigned, it will be undefinded.