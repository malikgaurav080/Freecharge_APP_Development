let person = {
    first_name : "Gaurav",
    last_name : "Malik"
};
//prior to es6

let fname = person.first_name
let lname = person.last_name

console.log(fname,lname)

//ES6
let {first_name: fName, last_name: lName} = person;
console.log(fName,lName)

let {first_name,last_name}= person;
console.log(first_name,last_name)