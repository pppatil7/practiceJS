function myFunction() {
    console.log("welcome to learn JS");
}

myFunction();

function sum(x, y) {
    s = x + y;
    return s;
}

let val = sum(5, 1);
console.log(val);


//arrow functions
const arrowSum = (a, b) => {
    console.log(a + b);
};