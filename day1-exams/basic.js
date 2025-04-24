var names = "John Doe";
var age = 30;
var scores = [90, 85, 88];
var isActive = true;
var grade = "B1";
console.log("Name: ".concat(names, ", Age: ").concat(age, ", Scores: ").concat(scores, ", Active: ").concat(isActive, ", Grade: ").concat(grade));
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["EDITOR"] = 1] = "EDITOR";
    Role[Role["VIEWER"] = 2] = "VIEWER";
})(Role || (Role = {}));
function getPermissions(role) {
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
console.log("Permissions for ADMIN: ".concat(getPermissions(Role.ADMIN)));
var users = [
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
];
function printActiveUsers(users) {
    users.forEach(function (user) {
        if (user.isActive) {
            console.log("Active User: ".concat(user.name, ", Role: ").concat(Role[user.role]));
        }
    });
}
printActiveUsers(users);
