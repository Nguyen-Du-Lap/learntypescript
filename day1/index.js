// 1. Kiểu dữ liệu cơ bản
var names = "lutz";
var age = 30;
var isAdmin = true;
var scores = [1, 2, 3, 4, 5];
var typle = ["lutz", 30, "asd"];
//2. Kiểu any, unknown, void, never
var anyType = "lutz";
var anyType1 = true;
var anyType2 = [1, 2, 3, 4, 5];
var anyType3 = 30;
var mayBe = "hello world";
function test(msg) {
    console.log(msg);
}
function fail() {
    throw new Error("This always fails");
}
test("hello world");
// fail(); // This will never return
