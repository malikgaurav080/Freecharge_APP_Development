let chars = new Set(['a','b','c','d','c','b']);

for(let ch of chars){
    console.log(ch)
}

console.log(chars)

console.log(typeof chars)

console.log(chars instanceof Set)

console.log(chars.size)

chars.add('e');

console.log(chars)

chars.add('f')
    .add('g');

console.log(chars)

let exist = chars.has('a');
console.log(exist)

let isexist = chars.has('z');
console.log(isexist)

chars.delete('f')
console.log(chars)

chars.clear();
console.log(chars)