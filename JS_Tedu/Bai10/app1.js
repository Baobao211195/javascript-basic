// nested objec

var person = {
    name: "oanhpv",
    getName : function () {
        return this.name;
    },
    // new 1 object
    address : {
        city : "ha nam",
        village : "yentrach"
    },
     // new 1 object
    job : {
        subject : "ET",
        expr : 2
    }
};

console.log(person.address.city);
console.log(person.job.subject);