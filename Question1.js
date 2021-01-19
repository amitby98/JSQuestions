/** @format */

//The program accept two integers and display the larger

let number1;
let number2;

number1 = prompt("Enter the first number");
number2 = prompt("Enter the second number");

number1 = Number(number1);
number2 = Number(number2);

if (number1 > number2) {
  alert("The larger number is" + number1);
} else {
  alert("The larger number is" + number2);
}
