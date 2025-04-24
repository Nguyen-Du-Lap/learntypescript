var book = {
    id: 1,
    name: "The Great Gatsby",
    price: 10.99,
    author: "F. Scott Fitzgerald",
};
function wrapInArray(item) {
    return [item];
}
var Storages = /** @class */ (function () {
    function Storages() {
        this.items = [];
    }
    Storages.prototype.add = function (item) {
        this.items.push(item);
    };
    Storages.prototype.getAll = function () {
        return this.items;
    };
    return Storages;
}());
var bookStorage = new Storages();
bookStorage.add("The Great Gatsby");
bookStorage.add("1984");
bookStorage.add("To Kill a Mockingbird");
console.log(bookStorage.getAll());
