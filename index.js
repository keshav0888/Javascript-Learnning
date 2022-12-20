/* console.log("keshav");

var x = 7;
function getName() {
  console.log("Namaste javascript");
}

getName();
console.log(x);
console.log("keshav shinde");
 */
/* var x = 1;
a();
b();
function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
 */

//const { count } = require("console");

//const { double } = require("webidl-conversions");

//const { copyFileSync } = require("fs");

/* function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a(); */
/*
{
  var a = 10;
  let b = 20;
  const c = 30;
}*/
/* var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a); */
//funcation statement
//a();
//console.log(b);
/* function a() {
  console.log("a callled");
} */

//function Expression
/* var b = function (a, b) {
  //parameters
  console.log("b callled", a, b);
};
b(1, 2); */ //argument
//Anonymous function
/* function () {

}
 */

//named function expression
/* setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
 */
//var e1 = document.getElementById("clickme");
//if (e1) {

/* function attachEventListeners() {
  document.getElementById("clickme").addEventListener("click", function xyz()
  {
    console.log("btn click");
  });
}
attachEventListeners() */
/* function a() {
  console.log("a");
}
a();
console.log("End"); */
/* console.log("Start");
setTimeout(function () {
  console.log("Callback");
}, 5000);
console.log("End"); */
/* document.getElementById("clickme").addEventListener("click", function cb() {
  console.log("btn click");
});
console.log("END"); */

/* console.log("start");
setTimeout(function cbT() {
  console.log("CB setimeout");
}, 5000);

fetch("https://api.github.com/users/hadley/orgs").then(function cbF() {
  console.log("CB netflix");
});
console.log("End");
 */
/* const radius = [3, 1, 2, 4];
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(calculateArea(radius));
 */
/* const arr = [5, 1, 5, 6, 8];
function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}
const output = arr.map(binary);
console.log(output);
 */
//filter function

/* const arr = [5, 1, 3, 2, 6];
function isOdd(x) {
  return x % 2;
}
const output = arr.filter(isOdd);
console.log(output); */
//reduce function

/* const arr = [5, 1, 3, 2, 4];
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));
const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output); */

const users = [
  { firstname: "akshay ", lastname: "saini", age: 26 },
  { firstname: "keshav ", lastname: "shinde", age: 24 },
  { firstname: "vaibhav ", lastname: "shinde", age: 20 },
  { firstname: "amol ", lastname: "devakate", age: 23 },
];

//list of full name
const output = users.map((x) => x.firstname + x.lastname);
console.log(output);
