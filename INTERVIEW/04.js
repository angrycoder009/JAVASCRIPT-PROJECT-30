const number = [1,2,3,4,5,6];
 const result =number.reduce((num,max)=>num>max?num:max,-Infinity)
console.log('max number is :',result)

const cart =[
     { name: "Apple", price: 30 },
  { name: "Banana", price: 10 },
  { name: "Mango", price: 50 }
]

const result2 = cart.reduce((total,item)=>total+item.price,0)
console.log('total price is:',result2);

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" }
];
const result3 = students.reduce((acc,students)=>{
    const{grade}=students
    if(!acc[grade]) acc[grade]=[]
    acc[grade].push(students.name)
    return acc;
},[])
console.log(result3)