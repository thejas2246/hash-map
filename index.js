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
      list.append(key,value)
      this.bucketContainer[hashCode] = list;
    }
    this.bucketContainer[hashCode].append(key,value);
    this.currentSize = this.currentSize++;
  }
}


// let test = new HashMap();


// test.set("Rama",1)
// test.set("jina",2)
// test.set("sita",3)
// test.set("thejas",5)
// test.set("kina",5)
// test.set("kira",5)
// test.set("sina",5)
// test.set("mana",5)
// test.set("sonu",5)
// test.set("mena",5)
// test.set("albin",5)
// test.set("joan",5)
// test.set("mani",5)
// test.set("joan",29)



// test.display();

// test.set("sita",50)
// test.set("sonu",50)
// test.display();
// test.set("sonu",23)

// test.display()