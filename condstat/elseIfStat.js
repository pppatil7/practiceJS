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
if (marks >= 90) {
    grade = "O";
} else if (marks >= 80) {
    grade = "A+";
} else if (marks >= 70) {
    grade = "A";
} else if (marks >= 60) {
    grade = "B+";
} else if (marks >= 50) {
    grade = "B";
} else if (marks >= 40) {
    grade = "P";
} else {
    grade = "F";
}

console.log(grade);