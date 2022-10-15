class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}

class LinkedLIST{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){
        var node = new Node(element);
        var current;


        if(this.head==null)
            this.head=node;
        else{
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }

    printList(){
        var curr = this.head;
        var str = "";
        while(curr){
            str+=curr.element+" ";
            curr=curr.next;
        }
        console.log(str);
    }


}

var l1 = new LinkedLIST();
l1.add(10);
l1.add(20);
l1.add(30);
l1.add(40);
l1.add(50);

l1.printList()