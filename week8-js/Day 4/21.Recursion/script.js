//1 sum of natural numbers
function naturalNumSum(n) {
  if (n === 1) return 1;
  return n + naturalNumSum(n - 1);
}
//console.log(naturalNumSum(5));

//2 reverse a string
function stringReverse(str) {
  if (str.length === 1) return str;
  return stringReverse(str.slice(1)) + str[0];
}

//console.log(stringReverse("maria"));

//3 count down
function countDown(n) {
  if (n === 0) return;
  console.log(n);
  return countDown(n - 1);
}
//countDown(5);

//4
function printArrayElements(arr) {
  let i = 0;
  if (i == arr.length) return;
  console.log(arr[0]);
  printArrayElements(arr.slice(1));
}

printArrayElements([1, 2, 3, 4, 5]);
