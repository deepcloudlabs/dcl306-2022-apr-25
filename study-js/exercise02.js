// New Class Syntax (ES6)
class Employee { // Syntactic-sugar
    constructor(identity, fullname, salary, iban) {
        this.identity = identity;
        this.fullname = fullname;
        this.salary = salary;
        this.iban = iban;

        this.increaseSalary = this.increaseSalary.bind(this);
    }
    increaseSalary(rate){
        this.salary = (1.0 + rate) * this.salary;
    }
    sayHello = () => {
        console.log(this);
        console.log(`Hello, ${this.fullname}!`);
    }
}

let jack = new Employee("11111111110", "jack bauer", 100000, "TR1");
/*
console.log(jack.salary); // 100000
jack.increaseSalary(0.25);
console.log(jack.salary); // 125000
*/

jack.sayHello();
setTimeout(jack.sayHello, 3000);