let ranks = ['A', 'B','C']

for(let i = 0; i<ranks.length; i++){
    console.log(ranks[i]);
}


//new loop construct in es6 --> for of

for(rank of ranks){
    console.log(rank);
}