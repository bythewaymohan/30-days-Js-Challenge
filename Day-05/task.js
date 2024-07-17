*********************    Activity 1: Function Declaration   *********************    

• Task 1: Write a function to check if a number is even or odd and log the result to the console.
function evenAndOdd(value) {
    if (value % 2 == 0) {
        console.log("The number is even.")
    } else {
        console.log("The number is odd.")
    }
}
evenAndOdd(0);

• Task 2: Write a function to calculate the square of a number and return the result.

function squareOfNumber(number) {
    return number * number
}
console.log(squareOfNumber(8));


*********************   Activity 2: Function Expression  *********************   

• Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function maxTowNum(num1, num2) {
    if (num1 > num2) {
        console.log(num1, "is greater");
    } else {
        console.log(num2, "is greater");
    }
}

maxTowNum(77, 100)


• Task 4: Write a function expression to concatenate two strings and return the result.

function concatenateString(str1, str2) {
    return str1 + str2
}
console.log(concatenateString('Mohan', 'Chaudhary'));


*********************    Activity 3: Arrow Functions    *********************   

• Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
sumOfTwoNumber = (number1, number2) => {
    return number1 + number2
}
console.log(sumOfTwoNumber(55, 542));


• Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
containSpecificChar = (str, char) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return true;
        }
    }
    return false
}
console.log(containSpecificChar('Mohan', 'M'))

*********************   Activity 4: Function Parameters and Default Values  *********************   

• Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

takeTowParameter = (para1, para2 = 6) => {
    return para1 * para2
}
console.log(takeTowParameter(5, 8));//40
console.log(takeTowParameter(8));//48



• Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

greetingMsg = (name, age) => {
    return `hello ${name} Thanks For Once Again visiting our site. Now you ara ${age} year old and you can eligible for our services.`
}
console.log(greetingMsg('Rohan', 22));
console.log(greetingMsg('Karan', 19));


*********************   Activity 5: Higher-Order Functions   *********************   

• Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
higherOrderFun = (fun, times) => {
    for (let i = 0; i < times; i++) {
        fun()
    }
}

const manyTimeCallFuntion = () => console.log('hiii')

higherOrderFun(manyTimeCallFuntion, 5)



• Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
higherFunction = (fun1, fun2, value) => {
    let result1 = fun1(value)
    let result2 = fun2(result1)
    return result2

}

const addfun = (value) => value + value;
const squareOfNum = (value) => value * value

console.log(higherFunction(addfun, squareOfNum, 2));

