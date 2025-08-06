import { LinkedList } from "./Linked-List.js";

class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.bucketContainer = [];
    this.currentSize =0;
   }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i))%this.capacity
    }

    return hashCode;
  }

  set(key,value){
    let hashCode = this.hash(key);
    if(hashCode<0 || hashCode > this.capacity){
      throw Error("bucket size exceded");
    }
    if(!this.bucketContainer[hashCode]){
      let list = new LinkedList();
      let count = list.append(key,value)
      if(count===0){
        this.currentSize++;
      }
      this.bucketContainer[hashCode] = list;
    }
    let count = this.bucketContainer[hashCode].append(key,value);
    if(count === 0){
      this.currentSize++
    }
  }

  get(key){
    let hashCode = this.hash(key);
    if(this.bucketContainer[hashCode]){
      let value = this.bucketContainer[hashCode].retrive(key);
      return value
    }
    return null
  }

  length(){
    console.log(this.currentSize)
  }
  clear(){
    this.bucketContainer = [];
    this.currentSize = 0
  }
}


let test = new HashMap();


test.set("Rama",1)
test.set("jina",2)
test.set("sita",3)
test.set("thejas",5)
test.set("kina",5)
test.set("kira",5)
test.set("sina",5)
test.set("mana",5)
test.set("sonu",5)
test.set("mena",5)
test.set("albin",5)
test.set("joan",5)
test.set("mani",25)
test.set("joan",29)
test.set("mani",900)
test.set("mano",34)
test.set("mano",34)

let val = test.get("mani")
console.log(val)

test.length();

// test.set("sita",50)
// test.set("sonu",50)
// test.display();
// test.set("sonu",23)

// test.display()