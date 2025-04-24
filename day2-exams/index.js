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
function printInfo(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    return input.toFixed(2);
}
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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.study = function () {
        console.log("".concat(this.name, " is studying."));
    };
    return Student;
}(Person));
function handleRequest(data) {
    if (typeof data === "string") {
        return "Received string: ".concat(data);
    }
    else if (Array.isArray(data)) {
        return data.join(", ");
    }
    else {
        return "Nothing received";
    }
}
console.log("handleRequest: ", handleRequest(null));
