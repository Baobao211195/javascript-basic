// ======hoisting js================

//1. đổi với variable
console.log("x : "+ x); // x is undefined
var x = 1  // hoisting chỉ có tác dụng với việc khai báo
          // việc 
          //khởi tạo ko có tá dụng


//2. đối với function.

console.log(add(3,3));

function add (a, b) {
    return a + b;
}


// 3. so sánh giữa biến và function thì functioin được ưu tiên hơn.

console.log( add2 (4, 6));

var add2;

function add2 (a, b){
    return a+ b;
}

console.log(add2);