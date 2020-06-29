'use strict';
const multiBracketValidation = require('./multi-bracket-validation');


describe('multiBracketValidation', ()=>{
  test('one bracket', () => {
    let bracketsString = '{}';
    expect(multiBracketValidation(bracketsString)).toBeTruthy();
  });
  test('multiple brackets', () => {
    let bracketsString = '{}(){}';
    expect(multiBracketValidation(bracketsString)).toBeTruthy();
  });
  test('multiple & nested brackets with extra characters', () => {
    let bracketsString = '()[[Extra Characters]]';
    expect(multiBracketValidation(bracketsString)).toBeTruthy();
  });
  test('multiple & nested brackets', () => {
    let bracketsString = '(){}[[]]';
    expect(multiBracketValidation(bracketsString)).toBeTruthy();
  });
  test('multiple & nested brackets with extra characters', () => {
    let bracketsString = '{}{Code}[Fellows](())';
    expect(multiBracketValidation(bracketsString)).toBeTruthy();
  });test('unbalanced brackets', () => {
    let bracketsString = '[({}]';
    expect(multiBracketValidation(bracketsString)).toBeFalsy();
  });test('unbalanced brackets', () => {
    let bracketsString = '(](';
    expect(multiBracketValidation(bracketsString)).toBeFalsy();
  });
  test('unbalanced brackets', () => {
    let bracketsString = '{(})';
    expect(multiBracketValidation(bracketsString)).toBeFalsy();
  });
  test('empty string', () => {
    let bracketsString = '';
    expect(multiBracketValidation(bracketsString)).toBeFalsy();
  });
    
});
  


