/*variable in javascript */
// let username = 'gopal yadav'
// let userIntro = 'my name is Gopal Yadav'
{var firstName = 'gopal'}
//var is not block scopt it can be acces anywehere
{let lastName = 'yadav'}
//let is limite to block scope one defined in under bracket it never be 
//used anywhere only limited to block scope
let age = 21
let isHappy = true
let a;
 a ='david'

 const hoursInDay = 24

// let userIntro = 'Hi , I am ' + username
firstName = 100
let userIntro = 
        'Hi I am '
        +a + " " 
        + lastName   //here we getting error because let is limited to only scope
        +'.I am '+ age + '  year old.'
