console.log("hello")

/**data type in javascript 1.primitive and Non - primitive*/
//follow up with primitive
//fundamental data tye
//number
console.log(2+3+4)
console.log(typeof 2) //number
console.log(typeof 2.333) //number

//string
console.log('gopal') //string
console.log(typeof 'gopal') //string checking

//hum numbers ko convert kar sakte hain strings mein
//kaise??
//method-1
//by using +'string'
console.log(typeof +'100') //gives oupt of numnber data type

//dusrre method 
//by using parseInt()
console.log(parseInt('100asfdfg')) //giving 100 seperate as number 

//hum string ko number mein bhi conveert ker sakte hain 
console.log(typeof 100 +''); //by using single quote or doule
//give output '100' as stri data type


//boolean data types
//boolean contain two value -- true and false
console.log(typeof true); //boolean
console.log(typeof false); ///boolean
//agar hum numnber mein convert karna chahe toh
console.log(typeof +true); //output - 1
console.log(typeof +false); ///output - 0


//undefined data type
//ye automatically js deta hain value java koi data type available
//nhi hota
console.log(undefined)
console.log(typeof undefined) //output : undefined


//null data type
//can be used by mostly developers
//type of null is object -->but that is bug not fixed by js for some reasons
console.log(null)
console.log(typeof null) //object //which is null
//agar number mein conveert kare toh gives value 0
console.log(typeof +null) //numnber
console.log(null + '')  //null


////bigint 

//user for much greater numbers
console.log(typeof 123456789012345678901234567890n) //bigint

//symbol data type
//abhi nhi baad mein janenge 