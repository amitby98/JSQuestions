/** @format */

// find the armstrong numbers of 3 digits.
for (let i = 100; i < 1000; i++) {
  let strNum = String(i);
  let a = Number(strNum[0]);
  let b = Number(strNum[1]);
  let c = Number(strNum[2]);
  if (a ** 3 + b ** 3 + c ** 3 === i) {
    console.log(i + "is the armstrong number");
  }
}
