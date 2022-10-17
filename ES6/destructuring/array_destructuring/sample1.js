function getcore(){
    return [1,2,3];
}
//prior es6
let scores = getcore();
console.log(scores[0] + " " + scores[1]);

//from ES6
let[x,y,z] = getcore();
console.log(x)
console.log(y)
console.log(z)