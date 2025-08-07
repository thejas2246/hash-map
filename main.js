import { HashMap } from "./index.js";


 const test = new HashMap() // or HashMap() if using a factory


test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')

test.set('lion','orange');
test.set('kite','blue')
 console.log(test.currentSize)


console.log(test.capacity)
 test.set('moon', 'silver')
 
 test.set('lion','mango');
 test.set('kite','yellow')
 console.log(test.currentSize)
console.log(test.capacity)
console.log(test.get('kite'))

console.log(test.entries())