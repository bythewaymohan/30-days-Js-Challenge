
*********************  Activity 1: Variable Declaration  *********************  

• Task 1: Declare a variable using var, assign it a number, and log the value to the console.

 var x = 43
 console.log(x)

• Task 2: Declare a variable using let , assign it a string, and log the value to the console.

 let y = "hello"
 console.log(y);



*********************  Activity 2: Constant Declaration  *********************  

 • Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
 
 const boolValue = 1
 console.log(Boolean(boolValue));



*********************  Activity 3: Data Types *********************  
 • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let numVariable = 143;
let strVariable = 'Chai Aur Code';
let boolVariable = 0;
let ObjVariable = {
    name: "chai aur code",
    email: "chaiaurcode@gmail.com",
    moblie: "+91 8373732928"
};
let arrVariable = ["hello", "how", "are", "you"];
console.log(typeof (numVariable));
console.log(typeof (strVariable));
console.log(typeof (boolVariable));
console.log(typeof (ObjVariable));
console.log(typeof (arrVariable));
console.log(Array.isArray(arrVariable));
console.log(numVariable, strVariable, boolVariable, ObjVariable, arrVariable);



*********************   Activity 4: Reassigning Variables   *********************  

 • Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.

let firstVal = 10;
firstVal = 20;
console.log(firstVal);



*********************   Activity 5: Understanding const   *********************  

• Task 6: Try reassigning a variable declared with const and observe the error.

const val = 45
val = 63;
console.log(val); // Error  :: TypeError: Assignment to constant variable.

