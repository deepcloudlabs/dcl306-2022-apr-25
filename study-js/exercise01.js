// Old Class Syntax (before ES6)
let Employee = function (identity, fullname, salary, iban) {
    this.identity = identity;
    this.fullname = fullname;
    this.salary = salary;
    this.iban = iban;

    this.increaseSalary = function (rate) {
        this.salary = (1.0 + rate) * this.salary;
    }
}

let jack = new Employee("11111111110", "jack bauer", 100000, "TR1");
console.log(jack.salary); // 100000
jack.increaseSalary(0.25);
console.log(jack.salary); // 125000
