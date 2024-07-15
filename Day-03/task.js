*********************   Activity 1: If-Else Statements   *********************  

• Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = -1;
if (number == 0) {
    console.log("Zero");
}
if (number > 0) {
    console.log("Postive");
}
if (number < 0) {
    console.log("Negative");
}

• Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
function person(age) {
    if (age >= 18) {
        console.log('person is eligible to vote')
    }
    if (age < 18) {
        console.log('person is not eligible to vote')
    }
}

person(19)




*********************   Activity 2: Nested If-Else Statements   *********************  

• Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let x = 10
let y = 888
let z = 99;
if (x > y) {
    if (x > z) {
        console.log("x is greater", x);
    } else {
        console.log("z is greater", z);
    }
} else {
    if (y > z) {
        console.log("y is greater", y);
    }
    else {
        console.log("z is greater", z);
    }
}


*********************  Activity 3: Switch Case   *********************  

• Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 2
switch (day) {
    case 1: console.log("Sunday");
        break;
    case 2: console.log("Monday");
        break;
    case 3: console.log("Tuesday");
        break;
    case 4: console.log("Wednesday");
        break;
    case 5: console.log("Thursday");
        break;
    case 6: console.log("Friday");
        break;
    case 7: console.log("Saturday");
        break;
    default: console.log("Recheck");
}


• Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let grade = 'B'
switch (grade) {
    case 'A': console.log("Above the 90%");
        break;
    case 'B': console.log("80% to 90%");
        break;
    case 'C': console.log("70% to 80%");
        break;
    case 'D': console.log("60% to 70%");
        break;
    case 'E': console.log("50% to 60%");
        break;
    case 'F': console.log("Below the 50%");
        break;
    default: console.log("Enter a valid grade");
}


*********************   Activity 4: Conditional (Ternary) Operator   *********************  

• Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let val = 23;
let value = val % 2
console.log(value);
console.log(value == 0 ? "even" : "odd");



*********************   Activity 5: Combining Conditions   *********************  

• Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2023
if (year % 4 == 0 || year % 400 == 0 && year % 100 != 0) {
    console.log("year is leap", year);
} else {
    console.log("year is not leap", year);
}
