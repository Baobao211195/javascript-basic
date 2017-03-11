// Date trong js
// Khoi tao 1 doi tuong data

// Bat buoc khoi tao qua contructor


//1. No para meter

var date1 = new Date();
console.log(date1) // tra ve ngay hien tai


//2. Minisecondes from 1/1/1970

var date2 = new Date(1111111);

console.log(date2)

// 3. Date String (year , month, data, Minisecondes)
var date3 = new Date()

console.log(date3.getDate());
console.log(date3.getDay());
console.log(date3.getFullYear());
console.log(date3.getHours());
console.log(date3.getTime());
console.log(date3.getSeconds());

// 4. co the su dung cac thu vien như datejs.com hoac momentjs.com de lam viec vs data hieu qua hon