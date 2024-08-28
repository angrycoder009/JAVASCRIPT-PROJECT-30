//Create a function that converts temperatures between Fahrenheit and Celsius
const ConvertCelciusToFaherenheit = (celcius)=>{
    return (celcius *9/5) + 32
}
console.log(ConvertCelciusToFaherenheit(12))


const ConvertFahereheitToCelcius = (Fahrenheit)=>{
    return (Fahrenheit-32)*9/5
}
console.log(ConvertFahereheitToCelcius(12))



//Write a script that swaps the values of two variables without using a temporary variable.
a = 10 , b = 20
b=a+b
a=b-a
b=b-a
console.log(a , b)


//Write a program that prints all numbers from 1 to 100. 
// For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz".
//  For numbers which are multiples of both three and five, print "FizzBuzz".
for (let index = 1; index <=100; index++) {
    if(index%3==0 && index%5==0)console.log("FizzBuzz") 
    if( index %3 ==0) console.log("Fizz")
    if(index%5==0)console.log("Buzz")
      
}


//Create a function that checks if a given string is a palindrome.

const CheckPalindrome =(str)=>{
    let tem =""
  for (let index = str.length-1; index >=0; index--) {
      tem +=str[index]
  }
  if(str===tem) return true
  return false
}
console.log(CheckPalindrome("mom"))




//Write a function that accepts two numbers as arguments and returns their sum.
//  If the two values are the same, return triple their sum.

const SumNumbers =(a,b)=>{return (a===b)?3*(a+b) :a+b}
console.log(SumNumbers(3,3))



///Implement a function to calculate the factorial of a number using both recursion and iteration.
const factorialNumber =(n)=>{
    let fac=1
    for (let index = 1; index <=n; index++) {
       fac *=index 
    }
    return fac
}
console.log(factorialNumber(5))

const factorialRecursive = (n) => {
    if (n === 0 || n === 1) {
        return 1;  // Base case: factorial of 0 or 1 is 1
    } else {
        return n * factorialRecursive(n - 1);  // Recursive case
    }
}

console.log(factorialRecursive(5));  // Output: 120


//Write a function that returns the largest and smallest numbers in an array
