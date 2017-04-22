var obj1 = {
    "name" : "oanhpv",
    "age" : 12,
    "address" : {
        "street" : "12-13",
        "province" : "HaNam"
    }

};
console.log(obj1);

function createObj (_firstName, _lastName, _age) {
    var obj = {};
    obj.fistName = _firstName || "oanh";
    obj.lastName = _lastName  || "pham van";
    obj.age      = _age       ||  23;

    return obj;
}
console.log(createObj());
console.log(createObj("van", "nguyen", 21));