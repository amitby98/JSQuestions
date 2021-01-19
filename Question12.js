/** @format */

// sum the multiples of 3 and 5 under 1000.

let sum = 0;
for (let a = 0; a < 1000; a++) {
  if (a % 3 === 0 || a % 5 === 0) {
    sum += a;
  }
}
console.log(sum);
