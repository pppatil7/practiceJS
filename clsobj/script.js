const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
};

const karanArjun = {
    salary: 70000
};

karanArjun.__proto__ = employee;
karanArjun.calcTax();