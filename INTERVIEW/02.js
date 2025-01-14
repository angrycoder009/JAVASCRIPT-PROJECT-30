//scope 
//var is function scope ,means if it decleared inside function and only access inside it 
function fun(){
    //declered in function scope
    var a = 20
}
//can't access on globle scope
console.log(a)



//var is not block scope, means if it decleared in {} it can access anywheere
if(true){
    //declared in block scope
    var b = 20
}
//can access globally
console.log(b)



//var is global scope , means it can acces anywhere
var z = 10
//declared globally
function f(){
    //access on function scope
    z = 20
    console.log(z)
}
if(true){
    //acccess on block scope
    z=z+20
    console.log(z)
}
//access on global scope
console.log(z)