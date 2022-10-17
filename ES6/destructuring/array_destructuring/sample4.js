function getitems(){
    return [10,20];
}

let item = getitems()
let third_item = item[2] != undefined ? item[2]:0;
console.log(third_item)