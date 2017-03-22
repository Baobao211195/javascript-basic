// ======strict mode trong js================
// x = 3.14;       // This will not cause an error. 
// myFunction();

// function myFunction() {
//    "use strict";
//     y = 3.14;   // This will cause an error
// }
'use strict';
console.log("=======vi du 1======");
function foo(){
    var x, y;
    x =1;
    y = 2;
    z = x + y; // z is undefined
}
foo();
console.log("=======vi du 2======");
// trong with la mot doi tuong.