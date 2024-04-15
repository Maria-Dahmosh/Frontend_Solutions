//JS Type conversion

//1
let num = 13;
console.log(
  `num type is ${typeof num} and num.toString() type is ${typeof num.toString()} `
);

//2
let num2 = "456";
console.log(
  `num2 type is ${typeof num2} and Number(num2) type is ${typeof Number(num2)}`
);

//3
const num3 = "78.9";
console.log(
  `num3 type is ${typeof num3} and parseFloat(num3) type is ${typeof parseFloat(
    num3
  )}`
);
console.log(`${parseFloat(num3)}`);

//console.log(`${Number(num3)}`);

//4
console.log(`${5 + "3"}`);

//5
console.log(`1 will be equal to ${Boolean(1)}`);
console.log(`0 will be equal to ${Boolean(0)}`);

//6
console.log(`'111' is a ${typeof "111"} but +'111' type is ${typeof +"111"}`);

//7
console.log(`True will be equal to ${Number(true)}`);
console.log(`False will be equal to ${Number(false)}`);
//or
console.log(`True will be equal to ${+true}`);
console.log(`False will be equal to ${+false}`);

//8
console.log(`null will be equal to ${Number(null)}`);

//string concatenation
