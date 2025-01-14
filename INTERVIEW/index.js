//what are possible way to create objects in javacript??
//1.object literals or object intializer
const object1 = {
    name : 'joe',
    age:23
}

//2.object create method
//obj.create()=>takes existing object and their properties and inherits all of them as 
const object = {
    name: 'joe',
    age: 23
};

const objProp = {
    isMarried: {
        value: false,
        writable: true,
        enumerable: true,
        configurable: true
    }
};

const person = Object.create(object, objProp);
console.log(person);  

//3.
