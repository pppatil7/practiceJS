let fullName = "Tony Stark";
console.log(fullName);
var lastName = "Stark";
console.log(lastName);

var age = 21;
console.log(age);

var age = 22; //by using var we can redeclare variable and update the value of variable //global scope

console.log(age);

let price = 99.10; //by using let we can update value but cannot able to redeclare //block scope
console.log(price);

price = 99.90; // can update the value
console.log(price);



const PI = 3.14; //by using const we cannot redeclare and also cannot update the value //block scope
console.log(PI);

// PI=1.23; // cannot update the value
//console.log(PI);

let a; //we can initialize only without adding value
console.log(a); //undefined
a = 20;
console.log(a);

const b = 100; //we cannot intialize only without adding value
console.log(b);