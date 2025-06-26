//create string
let str1 = "Tony Stark";
let str2 = '  Tony   ';

//inbuilt properties (variables) and functions (methods)

console.log(str1.length);
console.log(str2[1]);
let upperStr1 = str1.toUpperCase();
console.log(upperStr1);
let lowerStr1 = str1.toLowerCase();
console.log(lowerStr1);
console.log(str1);
console.log(str2.trim());
console.log(str2);

//template literals
let specialString = `This is a template literal`;

let obj = {
    item: "book",
    price: 120
}

console.log("the cost of", obj.item, "is", obj.price, "rupees");

let output = `the cost of ${obj.item} is ${obj.price} rupees`; //by using template literal
console.log(output);