
*********************   Activity 1: Array Creation and Access  *********************   

• Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(myArray)
// OR
for (const arr of myArray) {
    console.log(arr)
}


• Task 2: Access the first and last elements of the array and log them to the console.
console.log(myArray[0], 'and', myArray[myArray.length - 1])
//OR
if (myArray.length > 0) {
    console.log(myArray[0], ' AUR ', myArray[myArray.length - 1]);
} else {
    console.log('empty Arrray')
}



*********************   Activity 2: Array Methods (Basic)   *********************   

• Task 3: Use the push method to add a new number to the end of the array and log the updated array.
let myArr = [22, 34, 55, 33, 3, 55, 33];
console.log('old Array ', myArr);
myArr.push(44);
console.log('New Array ', myArr)


• Task 4: Use the pop method to remove the last element from the array and log the updated array.
let myArra = [1, 3, 4, 5, 3];
console.log('old Array ', myArra);
myArra.pop();
console.log('New Array ', myArra)


• Task 5: Use the shift method to remove the first element from the array and log the updated array.
let myShiftArr = [1, 2, 3, 4, 5, 6]
console.log('old Array ', myShiftArr);
myShiftArr.shift();
console.log('New Array ', myShiftArr)


• Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
let myShiftArrs = [1, 2, 3, 4, 5, 6]
console.log('old Array ', myShiftArrs);
myShiftArrs.unshift(0);
console.log('New Array ', myShiftArrs)


*********************    Activity 3: Array Methods (Intermediate)  *********************   

• Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let myMapArray = [1, 3, 5, 7, 9]
const newMapArr = myMapArray.map(ele => ele * 2);
console.log(newMapArr)


• Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let myFilterArr = [1, 2, 3, 4, 5, 6];
const newMyFilterArr = myFilterArr.filter(ele => ele % 2 === 0)
console.log('filter Array output ', newMyFilterArr)


• Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let myReduceArr = [1, 2, 3, 4, 5]
const somOfArray = myReduceArr.reduce((accum, currVal) => accum + currVal, 0)
console.log(somOfArray)



  *********************    Activity 4: Array Iteration   *********************   

• Task 10: Use a for loop to iterate over the array and log each element to the console.
let loopArr = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < loopArr.length; i++) {
    console.log(loopArr[i]);
}

• Task 11: Use the forEach method to iterate over the array and log each element to the console.
let forEachArr = [0, 4, 2, 3, 21, 2, 3]
forEachArr.forEach(element => {
    console.log(element)
});

*********************   Activity 5: Multi-dimensional   *********************   

• Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [2, 4, 5],
    [5, 3, 6],
    [2, 4, 1]
]
console.log(matrix)

• Task 13: Access and log a specific element from the two-dimensional array.

console.log(matrix[2][1])


