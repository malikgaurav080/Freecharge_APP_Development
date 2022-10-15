const { create } = require("json-server");

function createUser(name,age){
    // return {
    //     name:name,          //without es6
    //     age:age
    // };

    return {
        name,           //with es6 remove duplication
        age
    }
}

var obj = createUser("john",20)
console.log(obj.name + " " + obj.age)