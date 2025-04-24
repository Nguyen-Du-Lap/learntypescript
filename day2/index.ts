function greet(name: string): string {
    return `Hello, ${name}!`;
}

const sum = (a: number, b: number): number => a+b;

function log(message: string = "No message") {
    console.log(message);
}
function multiply(a: number, b?: number): number {
    return b ? a * b : a;
}

function printId(id: string | number) {
    console.log("ID:", id);
}

type Direction = "left" | "right" | "up" | "down";
function move(direction: Direction) {
    console.log("Moving", direction);
}

function format(input: string | number): string {
    if (typeof input === "string") {
        return input
    }
    return input.toFixed(2);
}

type Cat = { meow: () => void };
type Dog = { bark: () => void };

function speak(animal: Cat | Dog) {
    if ("meow" in animal) {
        animal.meow();
    } else {
        animal.bark();
    }
}

// test speak function
const cat: Cat = { meow: () => console.log("Meow!") };
const dog: Dog = { bark: () => console.log("Woof!") };
speak(cat); // Output: Meow!
speak(dog); // Output: Woof!

class Person {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name: string, public age: number, private position: string) {
        super(name, age);
    }


    showSalary() {
        console.log(`${this.name} is a ${this.position}.`);
    }
}
