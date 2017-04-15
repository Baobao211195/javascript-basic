/** 
Object trong javascript
*/

// có hai cách tao ra một object
// 1 : object literal  var obj = {};
// Properties là key : value
// Key có thể là properties thông thường, function, object...

var obj = {};

var obj2 = {
	name : "oanhpv",
	age : 12,

	sayHello : function() {
		console.log(name + "hello world");
	}

};

obj2.sayHello();