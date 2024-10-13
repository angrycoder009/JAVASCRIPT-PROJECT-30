// function display(param){
//   console.log(param)
// }
// display(2);

// function run (param){
//  param();
// }
// //the function that we passing in is called callback
// run(function(){

//     console.log('hellow4')
// })

setTimeout(function (){
    console.log('timeout')
    console.log('timeout2')
},1000);

//Asynchronouse code --> won't wait for the finish  before going on teh next line .
//sysnchronouse code -> computer wait to execute the code before going on the next line . 
console.log('next line ')


setInterval(function(){
    console.log('interval')
},3000);

console.log('nextline2')