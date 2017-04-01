// ======class trong js vs es5================


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
// tao 2 đối tượng là object của class Person.
// var p = new Person();
// console.log (p.name) 
// console.log (p.age)
// p.getInfo(); 
// console.log(p)

// var p2 = new Person();
// p2.name = "van kem";
// p2.age = 445;
// console.log (p2.name) 
// console.log (p2.age) 
// p2.getInfo(); 

// // 2. constructor.

// function Animal( type, location){
//     this.type = type || "1";
//     this.location = location || "Ha Nội";
// }

// var animal = new Animal();
// console.log(animal); 

// var animal1 = new Animal("2", "Ha Nam");
// console.log(animal1);

// 3. Properties vs getter và setter.

function Verhicle () {
    var _type = "unknown";

    // dùng phương thức này để định nghĩa một properties vs setter vs getter.
    Object.defineProperties(this, {   // this là thể hiện của class verhicle.
        "_production": {
            // getter
            get: function () {
                return this._type;
            },
            // setter.
            set : function (production) {
                this._type = production;
            }
        }
        // định nghĩa  nhiều thuộc tính ở đây
    });

}
var verhicle = new Verhicle();
verhicle._production = "Yamaha";
console.log(verhicle._production.);
