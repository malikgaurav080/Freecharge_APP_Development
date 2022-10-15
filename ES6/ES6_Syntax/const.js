const person ={age:20};
const persons =Object.freeze({age:100});  // can't reassign by reference var as well

person.age = 35;    //we can only reassign through reference variable
persons.age = 35         
console.log(person.age)
console.log(persons.age)

//person = {age:33}        reassigning not work
//persons = {age:333}      reassigning not work


