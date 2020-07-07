'use strict';
const Hash = require('../dataStructure/hashtable/hashtable');
let firstHash = new Hash(1024);
let secondHash = new Hash(1024);
firstHash.add('fond', 'enamored');
firstHash.add('wrath', 'anger');
firstHash.add('diligent', 'employed');
firstHash.add('outfit', 'garb');
firstHash.add('guide', 'usher');
///
secondHash.add('fond', 'averse');
secondHash.add('wrath', 'delight');
secondHash.add('diligent', 'idle');
secondHash.add('guide', 'follow');
secondHash.add('flow', 'jam');

function leftJoin(hashmap1, hashmap2) {

  for (let i = 0; i < hashmap1.storage.length; i++) {
    if (hashmap1.storage[i]) {
      
      if (hashmap2.storage[i]) {

        for (let j in hashmap2.storage[i].head.value) {
          if (hashmap1.storage[i].head.value[j]) {

            hashmap1.add(j, hashmap2.storage[i].head.value[j]);
          } else { hashmap1.add( j , 'null'); }
     
        }
      }
    }
  }
  return hashmap1;

}
// console.log(48, leftJoin(firstHash, secondHash).storage[48].head);
// console.log(173, leftJoin(firstHash, secondHash).storage[173].head);
// console.log(449, leftJoin(firstHash, secondHash).storage[449].head);
// console.log(706, leftJoin(firstHash, secondHash).storage[706].head);
console.log(746, leftJoin(firstHash, secondHash).storage[746].head);

