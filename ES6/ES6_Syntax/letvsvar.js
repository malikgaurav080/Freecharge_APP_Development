for(let i=0;i<5;i++){
    console.log("inner loop: ",i)
}

//console.log("outer :",i) this will not work because let is blocked scoped

for(var i=0;i<5;i++){
    console.log("inner loop: ",i)
}
console.log("outer :",i)           //now it will work