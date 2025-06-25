//logical operators
let isFollow = false;
let isSubscribed = true;

console.log(isFollow && isSubscribed); //false
console.log(isFollow || isSubscribed); //true
console.log(!isFollow); //true


let num1 = 23;
let num2 = 12;

console.log(num1 > 10 && num2 > 30); //false
console.log(num1 >= 23 && num2 > 10); //true
console.log(num1 > 10 || num2 > 30); //true
