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
        console.log(this.head)
        if(!this.head){
            return null;
        }

        let temp = this.head;
        while(temp){
            console.log([temp.value,temp.key]);
            temp = temp.nextNode
        }
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
// le.append('key','h')
// le.append('key','a')
// le.append('key','b')
// le.append('key','c')
// le.append('key','d')
// le.pop();
// le.pop();
// le.pop();
// le.pop();
// le.pop();


// le.display()