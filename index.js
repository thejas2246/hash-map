class HashMap {
  constructor() {
    this.loadFactor;
    this.capacity;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i))%16;
    }

    return hashCode;
  }

}


let test = new HashMap();

console.log(test.hash("Rama"));
console.log(test.hash("sita"));
console.log(test.hash("jina"));
console.log(test.hash("jinu"));
console.log(test.hash("Sita"));


