function sum(...args){
    let total=0;
    console.log(args)

    for(const a of args){
        total+=a

    }
    return total;
}

console.log(sum(10,20,30));
//console.log(sum([10,20,30]));


// function sum(a,b,...args){

//     console.log(args)

// }

// console.log(sum(10,20,30,40,50));   //[30,40,50]