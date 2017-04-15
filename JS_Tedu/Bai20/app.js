// ======Object trong js vs es5================

// class A 
function Person () {
    // thuộc tính của class
    this.name = "oanh";
    this.age = 34;
    // method của class
    this.getInfo = function () {
        console.log("name :" + this.name + "; age :" + this.age)
    }
}

// Định nghĩa cụ thể cho từng thuộc tính đối với từng object cụ thể
var oanh = new Person();

Object.defineProperty(oanh, "name", {
    writable: false,
    enumerable: false,
    configurable: false,
    value: "pham van oanh"
});
console.log(oanh);
console.log(oanh.name);
console.log(Object.getOwnPropertyDescriptor(oanh, "name"));

// định nghĩa cụ thể cho object vân kem
var vân = new Person();

Object.defineProperty(vân, "name", {
    writable: false, // bị ẩn đi khi đọc ra
    enumerable: false,
    configurable: false, // thuộc tính không thể change value đi được nữa.
    value: "vân Kem"
});
console.log(vân);
console.log(vân.name);
console.log(Object.getOwnPropertyDescriptor(vân, "name"));
console.log (Object.keys(vân)) ;  // chỉ hiển thị hai thuộc tính là age và getInfo.
vân.name = "loving you";
console.log(vân.name);  // giá trị vẫn là vân kem. không thể change thành loving you.






