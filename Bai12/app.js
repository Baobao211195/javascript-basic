// ===========Function==================
function sayHello(firtName, lastName){
    console.log(firtName + " " + lastName)
}
// có thể tủy biến số parameter truyền vào
sayHello("oanh");                   // oanh undefine
sayHello("oanh", "kem");            // oanh kem
sayHello("oanh", "love", "kem");    // oanh love

// argument objects
// 1. là một mảng các argument.
// 2 truy cập thông qua index của mảng arguments
console.log("=============================================");
function sayGoodBye (firtName, lastName) {
    console.log(arguments[0] + " " + arguments[1]);
}
sayGoodBye("oanh","kem");

console.log("=============================================");
// Function có thể trả về một function.
function calculate () {
    function add (a, b){
        return a + b;
    }
    return add;
}
var c = calculate();
console.log(c(1,7))

console.log("=============================================");
// có thể gán function cho một biến, và sử dụng tên biến đó như tên funciton.
var app = function (a, b) {   // hàm nặc danh.
    return a + b;
}
console.log(app(3,5));