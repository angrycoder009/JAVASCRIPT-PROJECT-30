///String methods without arguments
const msg = 'message';
const capitalMessage = msg.toUpperCase();
const faltuMessage = '     Hi I am Gopal'
const correctedSpaceFaltuMessage = faltuMessage.trim();

const eroMessage = '      Hi I am gopal      '
const correctSpaceFromStart = eroMessage.trimStart();
const correctSpaceFromeEnd = eroMessage.trimEnd();


//methods with argument
// 1-> include() ---> methods check string on presenting string give result true/false.
const message = 'My name is Gopal . I live in Lucknow.'
const isPresent = message.includes('is');
console.log(isPresent) //true


///2.--> indexof() -->methods checks string by index
const str = 'Banana'
const isIndexValue = str.indexOf('n');
console.log(isIndexValue)  // ans is 2. 

///3. ---> replace('what value' , 'change with value')
const fruit = 'Apple'
const changeFruit = fruit.replace('Apple','Grapes')
console.log(changeFruit)


///4. --> concat() ->used to add multiple string
const addString = fruit.concat(changeFruit,str,isIndexValue);
console.log(addString); //AppleGrapesBanana2

//5. --->padStart()or padEnd()  -->
const lastFourDigit = '7896'
const addXoverStartString = lastFourDigit.padStart(12,'x');
console.log(addXoverStartString)

//6 --> charAt() -->  find value using index over string
const value = 'pineapple'
const findCharacter = value.charAt(5);
console.log(findCharacter)  //p

//7 ---> charCodeAt() --> find ASCII code of particular character
console.log(findCharacter.charCodeAt())

//8 ---> split()  -->>> method used to arrange string inside array.



/// tamplate string 
const templateString = `Last four digit of my string is ${addXoverStartString}`;
console.log(templateString)