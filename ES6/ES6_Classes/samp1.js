function Person(name){
    this.name = name;
}

Person.prototype.getname = function(){
    return this.name;
}

var p = new Person("John");
console.log(p.getname());