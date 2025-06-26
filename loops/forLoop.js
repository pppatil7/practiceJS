for (let count = 0; count < 5; count++) {
    console.log("Helo!!");
}

console.log("loop has ended");


//print 1 to 10;
let number = 1;
for (let count = 1; count <= 10; count++) {
    console.log(number);
    number++;
}

//for-of loop
let str = "JavaScript";

for (let i of str) {
    console.log(i);
}

//for-in loop
const student = {
    fullName: "peter will",
    age: 21,
    cgpa: 9.5,
    isPass: true
};

for (let key in student) {
    console.log(key,":", student[key]);
}


