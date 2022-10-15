function stat(a,b){
    return [a+b,
    a-b,
    (a+b)/2];
}

let [sum,diff,avg] = stat(10,20);
console.log(sum,diff,avg);