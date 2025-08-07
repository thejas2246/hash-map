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
      if(count=== 0){
        this.currentSize++;
      }
      this.bucketContainer[hashCode] = list;
      return
    }
    let count = this.bucketContainer[hashCode].append(key,value);
    if(count === 0){
      this.currentSize++

    }
    if(this.currentSize > this.loadFactor * this.capacity ){
      this.increaeSize();
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
  keys(){
    let keyArray = []
    for(let item of this.bucketContainer){
      if(item){
        let arr = item.getKeys();
        keyArray = keyArray.concat(arr);
      }
    }
    return keyArray
  }
  values(){
    let keyArray = []
    for(let item of this.bucketContainer){
      if(item){
        let arr = item.getValues();
        keyArray = keyArray.concat(arr);
      }
    }
    return keyArray
  }
    entries(){
    let keyArray = []
    for(let item of this.bucketContainer){
      if(item){
        let arr = item.getKeyValues();
        keyArray = keyArray.concat(arr);
      }
    }
    return keyArray
  }

increaeSize(){
  let newArray = this.bucketContainer;
  this.capacity *= 2
  this.currentSize = 0;
  this.bucketContainer = [];
  for(let item of newArray){
    if(item){
    let arr = item.getKeyValues();
    arr.forEach(element => {
      this.set(element[0],element[1]);
    });
  }

  }
}
remove(key){
  let hashCode = this.hash(key);
  if(this.bucketContainer[hashCode]){
    let isKeyFound = this.bucketContainer[hashCode].delete(key);
    console.log(isKeyFound);
    if(isKeyFound){
      this.currentSize--;
    }
  }
}

display(){
for(let item of this.bucketContainer){
  if(item){
    item.display();
  }
}
}


}


