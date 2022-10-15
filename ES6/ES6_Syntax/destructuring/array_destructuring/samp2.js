function getscore(){
    return [1,2,3,4];
}

//from ES6
let[x,y,...args] = getscore();
console.log(x)
console.log(y)
console.log(args)