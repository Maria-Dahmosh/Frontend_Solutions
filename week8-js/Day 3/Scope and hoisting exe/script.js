// // // //1
// // // console.log(a); // What will be the output?
// // // var a = 5;
// // // console.log(b); // What will be the output?
// // // let b = 5;
// // // console.log(c); // What will be the output?
// // // const c = 5;

// // //2
// // console.log(myFuncDecl()); // What will be the output?
// // function myFuncDecl() {
// //   return "Hello from function declaration!";
// // }
// // console.log(myFuncExpr()); // What will be the output?
// // var myFuncExpr = function () {
// //   return "Hello from function expression!";
// // };
// //3
// const x = "global";
// function outerFunc() {
//   let y = "outer";
//   function innerFunc() {
//     var z = "inner";
//     console.log(x); // What will be the output?
//     console.log(y); // What will be the output?
//   }
//   innerFunc();
//   console.log(z); // What will be the output?
// }
// outerFunc();

//4
// const a = 1;
// function b() {
//   const a = 10;
//   c();
//   return;
//   function c() {
//     console.log(a);
//     // What will be the output?
//   }
// }
// b();
// console.log(a); // What will be the output of a?
foo();
function foo() {
  console.log(x); // What will be the output?
  var x = "Hello, world!";
  bar();
  function bar() {
    console.log(x); // What will be the output?
    let x = "Hello, scope!";
  }
}
