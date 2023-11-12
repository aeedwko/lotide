# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthoand use Labs. 

## Usage

**Install it:**

`npm install @aeedwko/lotide`

**Require it:**

`const _ = require('@aeedwko/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Asserts if the contents of two arrays are equal or not
* `assertEqual(actual, expected)`: Asserts if two values are equal or not
* `assertObjectsEqual(actual, expected)`: Asserts if the contents of two objects are equal or not 
* `countLetters(sentence)`: Returns an object denoting each unique letter in a sentence and its count
* `countOnly(allItems, itemsToCount)`: Returns an object denoting the count of each string specified by the user in an array
* `eqArrays(arr1, arr2)`: Returns true if the contents of two arrays are equal, otherwise returns false 
* `eqObjects(object1, object2)`: Returns true if both objects have identical keys and values, otherwise returns false
* `findKey(obj, callback)`: Returns the object's key based on the callback
* `findKeyByValue(obj, val)`: Returns the object's key that matches the passed value
* `flatten(arr)`: Returns a flattened array 
* `head(arr)`: Returns the first element of the array 
* `letterPositions(sentence)`: Returns an object denoting each unique letter and its position(s) in the sentence
* `middle(arr)`: Returns an array with the element(s) in the middle of the arr parameter
* `tail(arr)`: Returns an array without the first element of the arr parameter 
* `takeUntil(array, callback)`: Returns an array of elements based on the callback 
* `without(source, itemsToRemove)`: Returns an array without any elements specified in itemsToRemove


