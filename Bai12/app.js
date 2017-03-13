// Khỏi tạo array 

//1/ array literal 

showMessage("oanhpv", "vankem");

function showMessage (arg1, arg2) {
    for(var i = 0; i< arguments.length; i++) {
        console.log(arguments[i]);     
    }
    
}
