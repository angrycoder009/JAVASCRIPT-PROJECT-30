const number = [1,2,3,4,5,6];
//map

const doubled = number.map(num=> num*2)
console.log(doubled) //[2,4,9,16,25,36]

const celcius = [0, 20,30];
const fahernheit = celcius.map(temp =>temp*1.8 + 32);
console.log(fahernheit)  //[ 32, 68, 86 ]

const evenNumber = number.filter(num => num%2===0);
console.log(evenNumber)  //[ 2, 4, 6 ]

const words = ['apple','banana','dog','elephant']
const longWords =words.filter(words=>words.length>=5);
console.log(words)  //[ 'apple', 'banana', 'dog', 'elephant' ]


const sumOfNumbers = number.reduce((prev,curr)=>prev+curr,0);
console.log(sumOfNumbers)


const maxNumber = number.reduce((max,num)=>(num>max?num:max),-Infinity);
console.log(maxNumber)


//get name of the product costing more than 600 , in uppercase
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 700 },
  ];

  const result = products.
  filter(product => product.price>600).map(product=>product.name.toUpperCase()).reduce((all,name)=>all +name +" "," ");
  console.log(result)


  const name = ['kapil','virat','suraj'];
   const upperCase = name.map(name => name.toUpperCase());
   console.log(upperCase)



   const students = [
    { name: "Alice", scores: { math: 40, english: 50 } },
    { name: "Bob", scores: { math: 70, english: 80 } },
    { name: "Charlie", scores: { math: 50, english: 60 } }
  ];
  

  //add each object to percentage of their scores 
  //(math + english)/200 *100
 //access students.scores.
  const res = students.map((student)=>{
    const percentageScore = (student.scores.math+student.scores.english)*0.5
    student.scores.percentage=percentageScore
    return student
  });
  console.log(res)



  //users who are below 18 or don't have at least one premium subscription:

  const users = [
    { name: "Alice", age: 17, premium: true },
    { name: "Bob", age: 20, premium: false },
    { name: "Charlie", age: 25, premium: true },
    { name: "Dave", age: 15, premium: false }
  ];

  const  chooseUser = users.filter((user)=>user.age<18 || user.premium===false)
  console.log(chooseUser)



  const studentss = [
    { name: "Alice", score: 45 },
    { name: "Bob", score: 55 },
    { name: "Charlie", score: 65 },
    { name: "Dave", score: 35 }
  ];
//   group them into pass and fail based on 
// whether their score is 50 or higher.
//  The result should be an object.
const choosePass = studentss.filter(student =>student.score>=50)
const chooseFail = studentss.filter(student =>student.score<50)
const output ={}
output.pass = choosePass.map(pass=>pass.name)
output.fail=chooseFail.map(fail=>fail.name);
console.log(output)


//alternate Aproach
const alternateOutput = studentss.reduce((result,student)=>{
    if(student.score>=50){
        result.pass.push(student.name)
    } else{
        result.fail.push(student.name)
    }
    return result;
},{pass:[],fail:[]})
console.log(alternateOutput)


const products2 = [
    { name: "Laptop", price: 1000, discount: 0.1, inStock: true },
    { name: "Phone", price: 500, discount: 0.2, inStock: false },
    { name: "Tablet", price: 700, discount: 0.15, inStock: true }
  ];
  //calculate the total price of in-stock items 
  // after applying discounts.
  //  Ignore items that are out of stock.
const inStockDiscount = products2.filter(item =>item.inStock === true)
.reduce((totalPrice,item)=>{
    const calculateDiscount  = item.price - (item.discount*item.price)
    totalPrice+=calculateDiscount
    return totalPrice
},0)
console.log(inStockDiscount)