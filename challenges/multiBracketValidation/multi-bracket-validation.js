'use strict';

function multiBracketValidation(str) {
  if (str.length === 0) return false;
  
  let stack = [];
  let checkingObj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < str.length; i++) {

    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {

      stack.push(str[i]);
    }
    else {
      if (str[i] !== ')' && str[i] !== ']' && str[i] !== '}') {
        continue; 
      }

      let last = stack.pop();
      // console.log(last);
      if (str[i] !== checkingObj[last]) { return false; }
    }
  }

  if (stack.length !== 0) { return false; }
  return true;
}

module.exports = multiBracketValidation;

// console.log(multiBracketValidation('{}'));
// console.log(multiBracketValidation('{}(){}'));
// console.log(multiBracketValidation('()[[Extra Characters]]'));
// console.log(multiBracketValidation('(){}[[]]'));
// console.log(multiBracketValidation('{}{Code}[Fellows](())'));
// console.log(multiBracketValidation('[({}]'));
// console.log(multiBracketValidation('(]('));
// console.log(multiBracketValidation('{(})'));
