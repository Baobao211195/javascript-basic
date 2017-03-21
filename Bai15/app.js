// ======Hàm eval()================
// là một global function
//có thể một convert một string sang một câu lệnh js
// không nên sử dụng, ít sử dụng
function add (a, b){
    return a + b;
}
var result = eval('result= add(5,4)');

console.log(result);


//có thể một convert một string sang một json object
console.log("==============================");
var obj = eval('({"name":"oanh","love":"kem"})');

console.log(obj);
console.log(obj.name);

