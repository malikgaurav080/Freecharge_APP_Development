class Queue{
    constructor(){
        this.item=[];
    }
    enque(element){
        this.item.push(element);
    }
    front(){
        return this.item[0];
    }
    deque(){
        return this.item.shift();
    }
    display(){
        var data = " "
        for(var i=0; i<this.item.length; i++){
            data = data + this.item[i]+ " ";
        }
        return data;
    }
}

var que = new Queue();

que.enque(10)
que.enque(20)
que.enque(30)
que.enque(40)
que.enque(50)
que.enque(60)
que.enque(70)


console.log(que.front())
console.log("=======================")
console.log(que.display())