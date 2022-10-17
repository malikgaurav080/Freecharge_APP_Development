class Person{
    constructor(name){
        this.setName(name);
    }

    getName(){
        return this.name;
    }

    setName(newName){
        newName=newName.trim();
        this.name = newName;
    }
}

let p = new Person("Gaurav Malik");
console.log(p.name)
console.log(p)