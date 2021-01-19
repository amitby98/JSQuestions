/** @format */

//compute the greatest common divisor (GCD) of two positive integers.
let a = 50;
let b = 28;
let gcd;
while (a != b) {
  if (a > b) {
    gcd = b;
  } else {
    gcd = a;
  }
}
for (gcd; gcd > 0; gcd--) {
  if (a % gcd === 0 && b % gcd === 0) {
    console.log("The number is" + gcd);
    break;
  }
}
