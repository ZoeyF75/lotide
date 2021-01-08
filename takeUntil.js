const assertEqual = (actual, expected) => {
  return actual === expected? true : false;
 };
 
 const eqArrays = (actualArray, expectedArray) => {
   let boolean = [];
   for (let i = actualArray.length - 1; i >= 0; i--) {
     boolean.push(assertEqual(actualArray[i], expectedArray[i]));
   }
   assertArraysEqual(actualArray, expectedArray, boolean);
 };
 
 const assertArraysEqual = (actualArray, expectedArray, boolean) => {
   for (bool of boolean){
     if (bool === false){
       console.log(`❌ Assertion Failed: ${actualArray} !== ${expectedArray}`);
      }
    }  
  console.log(`🤩🥳🤩 Assertion Passed: ${actualArray} === ${expectedArray}`);
 }

const impliment = (until,exampleArray) => exampleArray.slice(0,until);

const takeUntil = (array, callback) => array.includes(callback) ? array.indexOf(callback) : 'This array does not contain a predicate value.';

const exampleArray = ['If', 'you', 'like', 'pina', 'coladas', ',', 'and', 'getting', 'caught', 'in', 'the', 'rain']
const results = impliment(takeUntil(exampleArray ,','),exampleArray);
console.log(eqArrays(results, ['If', 'you', 'like', 'pina', 'coladas']));