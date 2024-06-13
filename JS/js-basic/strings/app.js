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