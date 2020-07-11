'use strict';

const Hash = require('../dataStructure/hashtable/hashtable');

function commonWord(str){
  let maxWord = '';
  let max = 0;
  let count = 1;
  let hash = new Hash(200);

  let arr = str.split(' ');
  for (let i = 0; i<arr.length;i++){
    let theHashNum = hash.hash(arr[i].toLowerCase());

    //   console.log(theHashNum);
    if (hash.storage[theHashNum]){
      for(let j in hash.storage[theHashNum].head.value){

        if(j.toLowerCase() === arr[i].toLowerCase()){

          hash.storage[theHashNum].head.value[j]++;

          if(hash.storage[theHashNum].head.value[j] > max ){
            max = hash.storage[theHashNum].head.value[j]; 
            maxWord = j;
          }
        //   console.log('hash.storage[theHashNum].head.value.j',j);
        }
        // console.log('j',j,'arr[i]',arr[i] );
      }

    }else{hash.add(arr[i].toLowerCase(), count);}
  }
  return maxWord;
}

// console.log(commonWord('In a galaxy far far away'));
// console.log(commonWord('Taco cat ate a taco'));
console.log(commonWord('No Try not. Do or do not. There is no try.'));
