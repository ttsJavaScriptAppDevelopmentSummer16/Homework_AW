
var myNumber = 10;

function add(num1, num2){
  return num1 + num2;
}

function sub(num1, num2){
  return num1 - num2;
}

function calculate(operation, num1, num2) {
  return operation(num1,num2)
}

console.log(calculate(add, 2, 5));


//
// console.log(sum);
// add(1,2);
// console.log(sum);
