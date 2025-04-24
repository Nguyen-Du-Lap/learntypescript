let names: string = "John Doe";
let age: number = 30;
let scores: number[] = [90, 85, 88];
let isActive: boolean = true;
let grade: string | number = "B1";

console.log(`Name: ${names}, Age: ${age}, Scores: ${scores}, Active: ${isActive}, Grade: ${grade}`);

enum Role {
    ADMIN,
    EDITOR,
    VIEWER,
}

function getPermissions(role: Role): string[] {
    switch (role) {
        case Role.ADMIN:
            return ["read", "write", "delete"];
        case Role.EDITOR:
            return ["read", "write"];
        case Role.VIEWER:
            return ["read"];
        default:
            return [];
    }
}

console.log(`Permissions for ADMIN: ${getPermissions(Role.ADMIN)}`);

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    role: Role;
}

let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@gmail.com",
        isActive: true,
        role: Role.ADMIN,
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@gmail.com",
        isActive: false,
        role: Role.VIEWER,
    },
]

function printActiveUsers(users: User[]): void {
    users.forEach(user => {
        if (user.isActive) {
            console.log(`Active User: ${user.name}, Role: ${Role[user.role]}`);
        }
    });
}

printActiveUsers(users);