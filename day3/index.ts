interface User {
    id: number;
    name: string;
}

type Admin = {
    id: number;
    name: string;
}

interface AdminUser extends User {
    permissions: string[];
}

interface Animal {
    name: string;
    sound(): void;
}
interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    sound() {
        console.log("Woof! Woof!");
    }
}

function identity<T>(arg: T): T {
    return arg;
}

let a = identity<string>("Hello, World!");
let b = identity<number>(42);

let c = identity<number[]>([1,2,3]);

function getFirst<T>(arr: T[]): T {
    return arr[0];
}

interface ApiResponse<T>{
    suscess: boolean;
    data: T;
}

const userResponse: ApiResponse<User> = {
    suscess: true,
    data: {
        id: 1,
        name: "John Doe"
    }
}

class Box<T> {
    constructor(private value: T) {}
  
    getValue(): T {
      return this.value;
    }
}
  
const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello");

function logLength<T extends { length: number, str: string }>(item: T): void {
    console.log(`Length: ${item.length}, String: ${item.str}`);
}
