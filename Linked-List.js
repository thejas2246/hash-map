import { listNode } from "./list-node.js";

export  class LinkedList{
    constructor(){
        this.head = null;
    }
    append(key,value){
        let node = new listNode(key,value);
        if(!this.head){
            this.head = node;
            return 0;
        }
        let temp = this.head;
        if(temp.key === key){
            temp.value = value;
            return 1;
        }
        while(temp.nextNode){
            if(temp.key === key ){
                temp.value = value;
                return 1;
            }
            temp = temp.nextNode

        }
        if(temp.key === key){
            temp.value = value;
                console.log('ond')

            return 1
        }
        temp.nextNode = node;
        return 0;
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

    retrive(key){
        if(!this.head){
            return null;
        }

        let temp = this.head;

        while(temp){
            if(temp.key === key){
                return temp.value;
            }
            temp = temp.nextNode;
        }
        return null

    }
    getKeys(){
        let arr = [];
        if(!this.head){
            return [];
        }

        let temp = this.head;
        while(temp){
            arr.push(temp.key);
            temp = temp.nextNode;
        }
        return arr;
    }

    getValues(){
        let arr = [];
         if(!this.head){
            return [];
        }

        let temp = this.head;
        while(temp){
            arr.push(temp.value);
            temp = temp.nextNode;
        }
        return arr;
    }

    getKeyValues(){
         let arr = [];
         if(!this.head){
            return [];
        }

        let temp = this.head;
        while(temp){
            let newArr = [temp.key,temp.value]
            arr.push(newArr);
            temp = temp.nextNode;
        }
        return arr;
    }
}
// let le = new LinkedList();
// le.append("thejas","a");
// le.append("manu","jk");
// le.append("jake","sinu");
// le.append("manu","pk")



// le.display()