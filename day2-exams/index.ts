function printInfo(input: string | number) : any {
    if( typeof input === "string"){
        return input.toUpperCase();
    }
    return input.toFixed(2);
}

class Person {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


class Student extends Person {
    constructor(name: string, age: number, public grade: number|string) {
        super(name, age);
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

function handleRequest(data: string | string[] | null) : string {
    if (typeof data === "string") {
        return `Received string: ${data}`;
    } else if (Array.isArray(data)) {
        return data.join(", ");
    } else {
        return "Nothing received";
    }
}

console.log("handleRequest: ",handleRequest(null));