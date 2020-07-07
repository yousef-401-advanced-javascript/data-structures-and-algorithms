'use strict';
const hash = require('../dataStructure/hashtable/hashtable');

function repeatedWord (str) {
  let Hash = new hash(1024);
  let arr = str.split(' ');

  //   console.log(arr);
  for (let i = 0; i<arr.length;i++){
    Hash.hash(arr[i].toUpperCase());

    if(Hash.contains(arr[i].toUpperCase())){
      return arr[i];
    }
    Hash.add(arr[i].toUpperCase(), arr[i]);
  } 
  return 'there is no repeated value';   
}

let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.';
let str2 = 'hi jdjd llsls jdjd ij hi';
let str3 = 'hi jdjd llsls fdf sfs aa';
// let str4 = 'hi jdjd llsls jj jj hi';
// let str5 = 'hi jdjd llsls jj jj hi';
// let str6 = 'hi jdjd llsls jj jj hi';
// let str7 = 'hi jdjd llsls jj jj hi';

console.log(repeatedWord(str));
console.log(repeatedWord(str2));
console.log(repeatedWord(str3));
// console.log(repeatedWord(str4));
// console.log(repeatedWord(str5));
// console.log(repeatedWord(str6));
// console.log(repeatedWord(str7));

