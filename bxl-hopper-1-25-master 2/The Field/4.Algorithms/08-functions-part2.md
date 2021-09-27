# Advanced algorithmics - More on functions

## Theory

### Function definition

You all know how to define a function by now. **Function definitions are the same as defining a variable, that contains that function**. An example is worth a thousand words.

```javascript
function myFunc(a, b){
  return a + b;
}

// could be rewritten like this
const myFunc = function(a, b){
  return a + b;
}

// or even in a single line
const myFunc = (a, b) => a + b;
```

You can create a reference to any function, like this.

```javascript
const myFunc = (a, b) => a + b;
const myFuncCopy = myFunc;
myFuncCopy(2, 5); // 7
```

### Function composition

The previous principle is super powerful since it allows us to do function composition. You can **pass a function as a parameter** or **return a function**.

In this example, we're going to recreate the [Array.filter function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

This function will take an array as first argument, and a filter function as a second argument. It will create a new array only containing elements that have passed the filter function test.
```javascript
const totallyNotArrayFilter = (inputArray, filterFunction) => {
  let filteredArray = [];

  for(let element of inputArray){
    if(filterFunction(element)){
      filteredArray.push(element);
    }
  }

  return filteredArray;
}

const people = ['John', 'Barry', 'Leslie', 'Louis', 'Dominic', 'Leonard', 'Romuald'];

// This function returns true if the name starts with L
const startsWithL = (name) => name.startsWith('L');
const onlyPeopleThatStartsWithL = totallyNotArrayFilter(people, startsWithL); // ['Leslie', 'Louis', 'Leonard']

// This function returns true if the name is exactly 4 letters long
const fourLetters = (name) => name.length === 4;
const onlyPeopleWithFourLetters = totallyNotArrayFilter(people, fourLetters); // ['John']
```

Javascript arrays are full of useful methods. [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) creates a new array, and fills it by calling a function over elements of another array.

```javascript
const numbers = [0, 5, 2, 10];
const square = (x) => x * x;
const squaredNumbers = numbers.map(square); // [0, 25, 4, 100]
```

You can chain array methods to break a task, into smaller simpler subtasks. In the following example we're going to use the [String.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to convert a string to an array, then put it all in lowercase using `map` then filter out the cursewords, then use [Array.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) to flip the order of the words.
```javascript
const sentence = 'wHat tHe FuCk is tHis'
sentence.split(' ') // ['wHat', 'tHe', 'FuCk', 'is', 'tHis']
        .map((word) => word.toLowerCase()) // ['what', 'the', 'fuck', 'is', 'this']
        .filter((word) => word != 'fuck') // ['what', 'the', 'is', 'this']
        .reverse() // ['this', 'is', 'the', 'what']
        .join() // 'this is the what'
```

## Exercises

### Exercise 8.1

Create a function named `calculator`, this function takes 3 arguments:
- A number
- Another number
- An operation

The `operation` is just another function that takes the 2 numbers as arguments. Some idea of operations :
- The sum of the 2 numbers
- The power of the first number to the second number
- The logarithm of the first number to thesecond number

Example:
```
calculator(5, 7, power) // 78125
```

### Exercise 8.2

Using the rectangle class ([exercise 6.2](./06-classes.md)) you've made earlier, create an array of 100 random sized rectangles. Use `Array.sort()` to sort the array from the smallest surface to the biggest. Array sort takes a [comparision function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) as an argument.


### Exercice 8.3

Make a program that takes a sentence and censors the first and last word of the sentence. 

The censored word is a random list of the characters `#`, `$`, `*` and `!`. It should have the same number of characters than the original one. Example: `Hello` becomes `$##!$` or `!$#*#`, etc.

Full example:
```
Damn son, where did you find this
```
Becomes
```
$*#! son, where did you find **#$
```

Break down the task into multiple functions. You can convert any word to array using `word.split('')`.

### Exercise 8.4

You want to create automatic cashiers for a local shop. The role of the machine is to give the cash back to the customers, and it can only hold banknotes (5€/10€/20€/50€/100€). You'll have to determine if the refund can be handled by the machine (the machine does not manipulate coins!), and if it does it should return the right  combination of banknotes back to the customer.

A program takes the following values:
```javascript
[
  {
    price: 75,
    received: 100 // Should give back 25€ to the customer
  }, 
  {
    price: 26,
    received: 30 // Can't handle this transaction since 4€ can only be refunded with coins
  },
  {
    price: 10,
    received: 100 // Should give back 90€ to the customer
  }
]
```

... should return
```javascript
[
  {
    euro5: 1,
    euro20: 1
  },
  {
    euro20: 2,
    euro50: 1
  }
]
```

Break down the task into multiple functions. Use `map` and `filter`.
