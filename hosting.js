class Person {
    constructor(name) {
        this.name = name; // instance property (class scope)
    }

    greet() {
        let message = `Hello, my name is ${this.name}`; // block scope
        console.log(message);
    }
}

const person = new Person("Alice");
person.greet();
// console.log(message); // ❌ Error: message is not defined
