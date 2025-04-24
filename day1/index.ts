// 1. Kiểu dữ liệu cơ bản
let names: string = "lutz";
let age: number = 30;
let isAdmin: boolean = true;
let scores: number[] = [1, 2, 3, 4, 5];
let typle: [string, number, string] = ["lutz", 30, "asd"];

//2. Kiểu any, unknown, void, never
let anyType: any = "lutz";
let anyType1: any = true;
let anyType2: any = [1, 2, 3, 4, 5];
let anyType3: any = 30;

let mayBe: unknown = "hello world";

function test(msg: string): void {
    console.log(msg);
}

function fail(): never {
    throw new Error("This always fails");
}

test("hello world");
// fail(); // This will never return

enum Color {
    RED,
    GREEN,
    BLUE,
}

let color: Color = Color.RED;

type ID = string | number;

interface User {
    id: ID;
    name: string;
    age: number;
    isAdmin: boolean;
}

