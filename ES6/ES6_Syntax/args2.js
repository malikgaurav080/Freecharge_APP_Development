function sum(...args){
    //return args.filter(function(e){return typeof e === 'number';}).reduce(function(prev,curr){return prev+curr;})              //50
    return args.filter(function(e){return typeof e === 'string';}).reduce(function(prev,curr){return prev+curr;})               //welcomejohn
}

console.log(sum(20,'welcome',null,undefined,30,'john'));