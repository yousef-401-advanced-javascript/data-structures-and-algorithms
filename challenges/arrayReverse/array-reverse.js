'use strict';
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reversing(arr) {
    let revesedArray = [];
    let theLength = arr.length;
    for (let i = arr.length; i > 0; i--) {
        revesedArray[theLength - i] = arr[i - 1]
    }
    
    return revesedArray
}
console.log(reversing(['hi','jo',12]));
console.log(reversing([]));
console.log(reversing(array));


 