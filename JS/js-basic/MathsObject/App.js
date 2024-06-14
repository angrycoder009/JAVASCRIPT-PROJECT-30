/* maths object in javaScript
some maths properties to get used to with:
math.PI
math.sqrt1_2
math.sprt2
math.sqrt(x)
math.pow(x,y)
math.floor()
math.random()
math.ceil()
*/
const piValue = Math.PI;
console.log(piValue)  ///3.141592653589793
const sqrtValue = Math.sqrt(25)
console.log(sqrtValue) //5
const getPowerValue = Math.pow(2,10); //2^10
console.log(getPowerValue) //1024
const getMinInteger = Math.floor(2.3434);
console.log(getMinInteger) // 2
const getMaxInteger =Math.ceil(2.34);
console.log(getMaxInteger) //3
const getRandomDecimalFromBetween0and1=Math.random()
console.log(getRandomDecimalFromBetween0and1)


//create a function to generater randome value from 1 to 10
const getRandomFrom1to10 = Math.floor(Math.random()*10 ) + 1
console.log(getRandomFrom1to10)