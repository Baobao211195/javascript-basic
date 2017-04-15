// Chuỗi trong js, nằm giữa '' và ""


var str = new String('string object'); //--> object string
var str1 = new String('string object'); 
var str2 = "string object";
console.log(str==str1);
console.log(str===str1);
console.log('========');
console.log(str===str2);
console.log(str==str2);
console.log(str.length);
// sử dụng dấu "\" khi có dấu nháy trong chuỗi

var str3 = "hello \'van kem\' ngay moi"
console.log(str3);

var x = "phamvanoanh"
var x = x.replace('va');	
console.log(x);


