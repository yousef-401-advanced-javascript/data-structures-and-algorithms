'use strict';
function rowsArraySum(n){
  let finalArray =  [];
  for (let i = 0; i< n.length; i++){
    let indexSum = 0;
    for (let j = 0; j <n[i].length; j++){
      indexSum += n[i][j];
    }
    finalArray[i] = indexSum;   
  }
  return finalArray;
}
console.log((rowsArraySum([[1,2,3], [-1, 3, -4], [null, 1, 2]])));