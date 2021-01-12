# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zoeyf/lotide`

**Require it:**

`const _ = require('zoeyf/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actualArray, expectedArray)`: console logs assertion message comparing actualArray and expectedArray, returns eqArrays().
* `assertEqual(actual, expected)`: console logs assertion message comaparing actual and expected.
* `assertObjectsEqual(actual, expected)`: returns assertion message regarding the comparison of two objects
* `countLetters(string)`: returns object given a string of the number of occurences for each letter i.e. {h: 1, i: 1}
* `countOnly(allItems, itemsToCount`: given an array of values and an object, returns the number of times an 'item' occurs if it's true in the given array. 
* `eqArrays(actualArray, expectedArray`: returns a boolean value comparing actualArray and expectedArray values.
* `eqObjects(object1, object2)`: returns boolean value comparing object 1 and object 2.
* `findKey(object,key)`: given an object and a function for the value of a key-value pair, return the key.
* `findKeyByValue(object, value)`: given an object and a value of key-value pair, return the key.
* `flatten(array)`: given an array and nested array, returns the array with each value as its own index.
* `head(array)`: returns the value of an array at the first index.
* `index.js` : exports all functions in the lotide file in an object so they can all be accessed through the object.
* `letterPositions(string)`: return the index('s) of a given letter for a string.
* `map(array, callback)`: returns a new array of values as modified from the original array by the callback function.
* `middle(array)`: returns new array of value(s) at the mid index, will return 2 values if the array length is even.
* `tail(array)`: returns the value of an array at the last index.
* `takeUntil(until,exampleArray)`: given exampleArray return the values in the array up until the index of 'until'.
* `without(givenArray, itemsToRemove)`: return givenArray without the value(s) specificed(itemsToRemove).
