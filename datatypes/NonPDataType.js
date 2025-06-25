const student = {
    fullName: "Tony Stark",
    age: 21,
    cgpa: 9.4,
    isPass: true
};

student["age"] = student["age"] + 1;
student.age = student.age + 1;
console.log(typeof student); //object
console.log(student);
console.log(student["age"]);
console.log(student.fullName);