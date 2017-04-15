// ======Làm việc với string trong js================

var str1 = "pham van oanh";
var str2 = "van kem";

var st3 = str1.concat(str2);

console.log(st3);

//////// cut string ===========
console.log("pham van oanh".slice(2,5)); // out put : am
console.log("pham van oanh".slice(2)); // out put : am van oanh
console.log("pham van oanh".slice(2, "pham van oanh".length)); // out put : am van oanh

//=======
console.log("pham van oanh".toLocaleLowerCase().toUpperCase());


// ======undefined vs null trong js================
// undefined : là giá khi ta chỉ khai báo một biến mà không gán cho nó một giá trị nào cả
// eg
var x; // x là undefined


