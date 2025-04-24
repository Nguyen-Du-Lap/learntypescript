var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greet(name) {
    return "Hello, ".concat(name, "!");
}
var sum = function (a, b) { return a + b; };
function log(message) {
    if (message === void 0) { message = "No message"; }
    console.log(message);
}
function multiply(a, b) {
    return b ? a * b : a;
}
function printId(id) {
    console.log("ID:", id);
}
function move(direction) {
    console.log("Moving", direction);
}
function format(input) {
    if (typeof input === "string") {
        return input;
    }
    return input.toFixed(2);
}
function speak(animal) {
    if ("meow" in animal) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
// test speak function
var cat = { meow: function () { return console.log("Meow!"); } };
var dog = { bark: function () { return console.log("Woof!"); } };
speak(cat); // Output: Meow!
speak(dog); // Output: Woof!
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, position) {
        var _this = _super.call(this, name, age) || this;
        _this.age = age;
        _this.position = position;
        return _this;
    }
    Employee.prototype.showSalary = function () {
        console.log("".concat(this.name, " is a ").concat(this.position, "."));
    };
    return Employee;
}(Person));
