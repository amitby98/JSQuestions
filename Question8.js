/** @format */
/*According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares
 of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.*/

const number = 19;

let temp = number;
let sum = 0 ;
while (temp > 0) {
    const digit = temp%10;
    sum += digit**2;
    temp = (temp - digit)/10;
}

console.log(sum);

temp = number
while (temp !== 1 ) {
    let sum = 0 ;
    console.log(temp);
    while (temp > 0) {
        const digit = temp%10;
        sum += digit**2;
        temp = (temp - digit)/10;
}
temp = sum;
}
console.log ("number is a happy number");