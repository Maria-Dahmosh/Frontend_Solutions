const num1 = 8;
const num2 = 15;

console.log(`The sum of num1 and num2 is: ${num1 + num2}`);

//2

const a = 30;
const b = 12;
console.log(`The result is: ${a - b}`);

//3
const x = 7;
const y = 3;
console.log(`The result is: ${x * y}`);

//4
const dividened = 20;
const divisor = 4;
console.log(
  `The quotient is: ${dividened / divisor}, and the remainder is ${
    dividened % divisor
  } `
);

//5
const number1 = 15;
const number2 = 25;
const number3 = 10;
console.log(`The average is: ${(number1 + number2 + number3) / 3}`);

//6

console.log(
  "The modulo operator gives you the remainder of a division. For example 5 % 3 = 2. ( You divide 5 by 3, the result is 1 and the remainder is 2)"
);

console.log(`The result is: ${x % 3}`);

//7
function isEven(number) {
  if (number % 2 === 0) {
    console.log(`${number} is oven `);
  } else {
    console.log(`${number} is odd `);
  }
}
isEven(56);

//8
function isfiveSeven(number) {
  if (number % 5 === 0 && number % 7 === 0) {
    console.log(`${number} is divisible by both 5 and 7. `);
  } else {
    console.log(`${number} doesn't satisfy the condition. `);
  }
}
isfiveSeven(35);
isfiveSeven(36);

//9
for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    console.log(`${i}`);
  }
}

//10
function between10and20(number) {
  if (number > 10 && number < 20) {
    console.log(`${number} is greater than 10 and less than 20. `);
  } else {
    console.log(`${number} doesn't satisfy the condition. `);
  }
}
between10and20(13);
between10and20(31);

//11
function function11(number) {
  if (number < -5 || number > 10) {
    console.log(`${number} is less than -5 or greater than 10. `);
  } else {
    console.log(`${number} doesn't satisfy the condition. `);
  }
}

function11(-19);
function11(0);
function11(29);

//12
function function12(number) {
  console.log(!number);
}
function12(true);
function12(false);

//13
function function13(number) {
  if ((number > 5 && number < 10) || (number > 20 && number < 30)) {
    console.log(`${number} satisfy at least one of the conditions.`);
  } else {
    console.log(`${number} doesn't satisfy the condition. `);
  }
}

function13(6);
function13(22);
function13(32);
function13(3);
