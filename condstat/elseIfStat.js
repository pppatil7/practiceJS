let age = 21;

if (age < 18) {
    console.log("junior");
} else if (age > 60) {
    console.log("senior");
} else {
    console.log("middle");
}


let marks = 90;
let grade;
if (marks >= 90 && marks <= 100) {
    grade = "A";
} else if (marks >= 70 && marks <= 89) {
    grade = "B";
} else if (marks >= 60 && marks <= 69) {
    grade = "C";
} else if (marks >= 50 && marks <= 59) {
    grade = "D";
} else if (marks >= 0 && marks <= 49) {
    grade = "F"
}

console.log("according to your marks, your grade is:", grade);