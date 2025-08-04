import { listNode } from "./list-node.js";

export  class LinkedList{
    constructor(){
        this.head = null;
    }
    append(key,value){
        let node = new listNode(key,value);
        if(!this.head){
            this.head = node;
            return ;
        }
        let temp = this.head;
        while(temp.nextNode){
            temp = temp.nextNode
        }
        temp.nextNode = node;
    }
    display(){
        if(!this.head){
            return null;
        }

        let temp = this.head;
        while(temp){
            console.log(temp.value,temp.key);
            temp = temp.nextNode
        }
    }
}

let te = new LinkedList();

te.append("thejas","valu");
te.append("thjas","value");
te.append("thejs","val");
te.append("theja","value");

te.display();