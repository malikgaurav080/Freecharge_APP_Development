let chars = new Set(['a','b','c','d','c','b']);

for(let ch of chars){
    console.log(ch)
}

for(let [key,value] of chars.entries()){
    console.log(key===value)
}


chars.forEach(role => console.log(role.toUpperCase()));