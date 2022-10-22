class Animal{
    constructor(legs){
        this.legs = legs;
    }

    walk(){
        console.log("walkig on " + this.legs + " Legs");
    }
}

class Bird extends Animal{
    constructor(legs){
        super(legs);
    }

    fly(){
        console.log("flying");
    }
}

let bird = new Bird(2);
bird.walk();
bird.fly();