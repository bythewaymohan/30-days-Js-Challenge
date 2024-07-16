*********************   Activity 1: For Loop  *********************   

• Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

• Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i, '* 5 =', i * 5)
}


*********************    Activity 2: While Loop   *********************   

• Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 0;
temp = 0;
while (i <= 10) {
    console.log(temp += i);
    i++;
}


• Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let x = 10;
while (x >= 1) {
    console.log(x);
    x--;
}

*********************    Activity 3: Do... While Loop   *********************   

• Task 5: Write a program to print numbers from 1 to 5 using a do... while loop.

let y = 1;
do {
    console.log(y)
    y++;
} while (y <= 5)


• Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let fact = 5;
temp = 1
do {
    temp *= fact
    fact--
    console.log(temp);
} while (fact >= 1)





*********************    Activity 4: Nested Loops    *********************   


• Task 7: Write a program to print a pattern using nested for loops:
for (let row = 0; row <= 5; row++) {
    let line = '';
    for (let col = 0; col <= row; col++) {
        line += '*';
    }
    console.log(line);
}



*********************    Activity 5: Loop Control Statements   *********************   
• Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let num = 1; num <= 10; num++) {
    if (num === 5) {
        continue;
    }

    console.log(num)
}


• Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let nums = 1; nums <= 10; nums++) {
    if (nums == 7) {
        break;
    }
    console.log(nums);
}
