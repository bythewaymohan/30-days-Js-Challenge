*********************   Activity 1: Template Literals   *********************  

• Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let person = "hitesh"
let age = 23
let str = `${person}, sir is an grate tutor and his age is ${age}`;
console.log(str);


• Task 2: Create a multi-line string using template literals and log it to the console.
let multilineString = `hell i am multi-line String and please console me. 
i m waiting for it`
console.log(multilineString)


*********************   Activity 2: Destructuring   *********************  

• Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let myFruitsArr = ['Apple', 'Banana', 'Mango', 'Grapes', 'Fig']
let [furits1, fruit2, furit3] = myFruitsArr
console.log(fruit2, furit3, furits1)


• Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    title: "Lost My Memory",
    author: "Thomus A.K",
    year: 1938
}
let { title, author } = book
console.log(title, author);



*********************  Activity 3: Spread and Rest Operators  *********************  

• Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const myArray = [11, 22, 33, 44, 55, 66]
const newArray = [...myArray, 444, 322, 44]
console.log(newArray);


• Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function fun(...restOp) {
    let temp = 0
    for (let sum of restOp) {
        temp += sum
    }
    return temp;
}



console.log(fun(1, 2, 3, 4, 5, 6))

*********************   Activity 4: Default Parameters   *********************  


• Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

myFunction = (value1, value2 = 1) => {
    return value1 + value2
}

console.log(myFunction(4));

 
*********************   Activity 5: Enhanced Object Literals   *********************  
• Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let myObj = {
    name: 'Mohan',
    myAge: 22,
    location: "Delhi",
    Work: 'Student',
    greeting() {
        console.log(`my name is ${this.name} and i am from ${this.location}`)
    }
}

console.log(myObj)
myObj.greeting()



• Task 9: Create an object with computed property names based on variables and log the object to the console.

let key1 = 'firstName'
let key2 = 'lastName '
let key3 = 'yourAge'

let value1 = 'Mohan'
let value2 = 'Chaudhary'
let value3 = 22

let myComputeObj = {
    [key1]: value1,
    [key2]: value2,
    [key3]: value3
}

console.log(myComputeObj)


