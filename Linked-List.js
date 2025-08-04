import { listNode } from "./list-node";

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
}