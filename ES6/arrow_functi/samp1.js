let add = function(a,b){
    return a+b;
}

console.log(add(10,5));

//Arrow function

// let addition = (x,y) => { return x+y };
let addition = (x,y) => x+y;


console.log(addition(40,40));
console.log(typeof addition);
console.log(addition instanceof Function);