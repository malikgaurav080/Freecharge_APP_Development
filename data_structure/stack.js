class Stack{
    constructor(){
        this.item=[];
    }
    push(element){
        this.item.push(element);
    }

    pop(){
        return this.item.pop();
    }

    peek(){
        return this.item[this.item.length-1];
    }
    displayStack(){
        var str = " "
        for(var i=this.item.length; i>=0; i--){
            str = str + this.item[i]+ " ";
        }
        return str;
    }
}

var stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.push(70)


console.log(stack.displayStack());
console.log("=======================");
console.log(stack.peek());
console.log(stack.pop());

console.log("=========================");
console.log(stack.displayStack());