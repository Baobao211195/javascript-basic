// Phạm vi của biến trong js
//
//========================Bien GLOBAL====================================
// 1. GLOBAL scope
// Một biến định nghĩa ngoài tất cả các function thì nó trở thành global scope.
//. Note : nếu biến mà được khai bao trong function mà ko có từ khóa var thì nó cũng trở thành global scope.
console.log("============================================================")
var x = 5;

function sayHello () {
    console.log("X la bien global" + x);
}

function sayGoodBye () {
    y = 5;                        // y khong khai bao var nen y la bien global.
    console.log("Y trong function sayGoodBye :" + y);
}

function sayThanks () {
    console.log("Y trong function sayThanks :" + y);

}
sayHello();
sayGoodBye();
sayThanks();
//==================Bien local=======================================
//2. Một biến được khai báo bên trong một function với từ khóa var được gọi là biến local.



console.log("============================================================")
//==================Tips=======================================
//3. Nếu có một biến local trùng tên vs một biến global thì khi thay đổi giá trị biến local, thì giá trị biến
//   global vẫn không thay đổi
var name = "oanhpv";
function loveKem () {
    var name = "kem";
    console.log("Trong function: " + name);
}
loveKem();
console.log("Ngoài function: " + name);
console.log("============================================================")
//====================================================================
//4. Không bị block level scope.
// tức là biến không bị giới hạn trong một block {}
if (true){
    var str = "oanhpv1";
    console.log("Biến trong block if : " + str);

}
console.log("Biến ngoài block if : " + str);   // không bị block
