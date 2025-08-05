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
        if(temp.key === key){
            temp.value = value;
            return ;
        }
        while(temp.nextNode){
            if(temp.key === key ){
                temp.value = value;
                return;
            }
            temp = temp.nextNode

        }
        if(temp.key === key){
            temp.value = value;
            return 
        }
        temp.nextNode = node;
    }
    display(){
        if(!this.head){
            return null;
        }

        let temp = this.head;
        let disp = ''
        while(temp){
            disp += `[${temp.key},${temp.value}]->` 
            temp = temp.nextNode
        }
        console.log(disp)
    }
    pop(){
        if(!this.head){
            return
        }
        if(this.head.nextNode===null){
            this.head = null;
            return 
        }
        let temp = this.head;
        while(temp.nextNode.nextNode){
            temp = temp.nextNode;
        }
            temp.nextNode = null;
    }
}
// let le = new LinkedList();
// le.append("thejas","a");
// le.append("manu","jk");
// le.append("jake","sinu");
// le.append("manu","pk")



// le.display()