let marks = [89, 98, 78, 90, 76];
console.log(marks);
console.log(marks.length);

let names = ["peter", "john", "david", "johnson", "tim"];
console.log(names);
console.log(names[0]);

//loop over arrays
for (let count = 0; count < names.length; count++) {
    console.log(names[count]);
}

for (let mark of marks) {
    console.log(mark);
}