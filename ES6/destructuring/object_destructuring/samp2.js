let person = {
    first_name : "Gaurav",
    last_name : "Malik",
    age : 20                            //if we will remove it then default value will be print               
};


// //ES6

let {first_name,last_name, age = 30}= person;
console.log(first_name,last_name,age)



