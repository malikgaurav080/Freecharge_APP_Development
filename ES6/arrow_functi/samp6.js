// let setcolor = function (color){
//     return {value:color}
// };

let setcolor = color => ({value:color});

let bgcolor = setcolor("Blue");
console.log(bgcolor.value)