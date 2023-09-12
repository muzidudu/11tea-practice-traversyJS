---
tags: lernen, Traversy
---

[Back to all Chapters](https://pad.schreibwerkstatt-berlin.de/lernen-traversyjs)
----


# 02 - Arrays & Objects

## 01 Array Basics

`Arrays` are a special type of `object` in JavaScript. Arrays are also what we call a `data structure`, which is just that, a way of structuring data. Lets look at a basic Array

<img src="https://upload.fryy.de/TraversyJSImages/array.png" alt="" style="width: 500px" />

We create a variable and set it to some brackets with some values inside. The values could be of any type. In this case, we have an array of numbers.

The values in an array are called `elements`. Each element has an `index`. The index is the position of the element in the array. The first element in an array has an index of 0. The second element has an index of 1, and so on. In just about every language, arrays are zero-based.

Let's create this same array in our code

```javascript
const arr = [374, 755, 398, 118, 289];
```

If we log the array in the console, we'll see that like other types of objects, it has a prototype property. These are all kinds of properties and methods that can be used with arrays. We'll get more into those in a little bit.

```javascript
console.log(arr);
```

##### Array Constructor

There is a second way to create an array that is less common. The one that we have already used is called an `array literal`. The second is by using the `Array` constructor with the `new` keyword

```js
const arr2 = new Array(1, 2, 3, 4, 5);
```

You can use either one to create an array. They both create an array object.

##### Getting values by index

So to get one of these values, we can use the index of the element we want to get. To get the first one

```javascript
arr[0];
```

If we wanted to use an array value in an expression, we could

```javascript
arr[0] + arr[3]; //492
```

Arrays can have any type of data within it. In this case, we have an array of numbers, but we could create an array of strings

```javascript
const fruit = ['apples', 'oranges', 'pears'];
```

We can even mix types of data within an array and even have an array within an array

```javascript
const mixed = [1, 'string', true, null, undefined, [1, 2, 3]];
```

##### Array length

We can get the length of an array using the `.length` property, which is very useful

```javascript
console.log(arr.length); // 5
```

##### Mutating arrays

Arrays are mutable, meaning we can add, change and remove elements. There are many methods that we can use and I'll get into those in a little bit, but lets say we want to add a new element to the end without using any kind of method.

We know that the `length` property gives us the total count of elements and since the array is 0-based, we can simply add the length as the index of the new element

```JavaScript
fruit[fruit.length] = 'Peaches'; // ['apples', 'oranges', 'pears', 'peaches']
```

````

In the code above, `fruit.length` was `3` so we set the value of `fruit[3]`, which was the next index.

If we want to target a specific index and change the value, we can do that easily

```javascript
fruit[1] = 'mangos';
````

We can also set the array length to a new value, which will shorten the array

```JavaScript
fruit.length = 2;
```

Now the array would look like this

```javascript
['apples', 'oranges'];
```

## 02 Array Methods

As we talked about earlier, arrays are a special kind of `object`. Objects have `properties` and `methods`. In JavaScript, those methods are stored in the `prototype chain`. We'll talk much more about prototypes later on, but we already saw that both `string objects` and `number objects` have properties and methods in their prototypes.

#### Array methods

##### push()

Push adds an element to the end of the array.

```js
arr.push(6); // [1, 2, 3, 4, 5, 6]
```

##### pop()

Pop removes the last element of the array.

```js
arr.pop(); // [1, 2, 3, 4, 5]
```

##### unshift()

Adds an element to the beginning of the array.

```js
arr.unshift(0); // [0, 1, 2, 3, 4, 5]
```

##### shift()

Takes an element off of the start of the array.

```js
arr.shift(); // [1, 2, 3, 4, 5]
```

##### reverse()

I'll let you figure out what this does.

```js
arr.reverse(); // [5, 4, 3, 2, 1, 0]
```

#### Returning values from an array

The methods above are all used to manipulate a current array. These methods are typically used to return some kind of value from an array.

##### includes()

Returns `true` if the array contains the value you pass in.

```js
arr.includes(5); // true
```

##### indexOf()

Returns the index of the value you pass in.

```js
arr.indexOf(5); // 4
```

##### Return string from array

```js
arr.toString(); // "1,2,3,4,5"
arr.join(); // "1,2,3,4,5"
```

#### slice() and splice()

These are similar in that they both are used to return a new array using a subset of the current array.

##### slice()

slice() takes in two parameters. One being the starting index and one being the ending index.

```js
const newArr = arr.slice(1, 3); // [2, 3]
```

##### splice()

splice() takes in the starting index and the number of elements from the staring index. If you leave off the number of elements, it will take from the starting index and on.

```js
const newArr = arr.splice(1, 3); // [2, 3, 4]
```

Another difference is that slice() does not modify the original array and splice() does. If you log the original array, you will see those elements are gone.

To pluck out a single value, use splice and pass the start index and then 1 as the second arg because you only want to remove that element.

```js
const newArr = arr.splice(2, 1); // [3] the original array would be [1, 2, 4, 5]
```

You can also start from the end with a negative value

```js
const newArr = arr.slice(-2); // [4, 5]
```


#### Chaining methods

You can also chain these methods together. Just be aware of what is being returned from the previous method.

```js
x = arr.concat(arr2).reverse();
x = arr3.slice(1, 3).toString();
```

## 03 Nesting, concat, spread & Array Object Methods

To get you more familiar with arrays, we are going to look at nesting, concatenation and the spread operator

Let's create our fruit array again

```javascript
const fruits = ['apple', 'pear', 'orange'];
```

and let's create a "berries" array

```javascript
const berries = ['strawberry', 'blueberry', 'rasberry'];
```

Now let's nest the berries array inside the fruit array

```javascript
fruits.push(berries);// ['apples', 'oranges', 'pears', ['strawberries', 'blueberries', 'raspberries']]
```

Now if we want to access blueberries for example, we can do so

```javascript
fruits[3][1]; // blueberries
```

We could also create a new variable and nest both arrays:
```JavaScript
const allFruits = [fruits, berries];
```

```javascript
allFruits[1][1]; // blueberries
```

##### concat()

We may not want to nest arrays, but we can concatenate them together into the same array using `concat()`.

```javascript
const newArr = fruits.concat(berries);// ['apples', 'oranges', 'pears', 'strawberries', 'blueberries', 'raspberries']
```

So now we have a single array with all of the values of both arrays. There is no nesting going on.

##### Spread operator (...)

The spread operator is a very useful operator that allows us to spread out an array into another array. We can use it to achieve the same type of stuff that concat() does. The spread operator also works with object literals, which we will talk about very soon.

```javascript
const newArr2 = [...fruits, ...berries]; // ['apples', 'oranges', 'pears', 'strawberries', 'blueberries', 'raspberries']
```


#### Flatten an array

You can use the `flat()` method to flatten an array. It takes in a parameter for the depth. If you don't want a limit to the depth, you could use `Infinity`.

```js
const arr = [1, 2, [3, 4, 5], 6, [7, 8, [9, 10, [11, 12]]]];
x = arr.flat(Infinity);
```



#### Static properties on the Array object

The Array object in JavaScript actually has some helpful methods directly associated with it that we can use.

##### Array.from()

Check if something is an array.

```js
Array.isArray(fruits); // true
Array.isArray('Hello'); // false
```

##### Array.from

Convert an array-like object into an array.

```js
Array.from('12345'); // ['1', '2', '3', '4', '5']
```

##### Array.of()

Create an array from a variable number of arguments.

```js
const a = 1;
const b = 2;
const c = 3;
y = Array.of(a, b, c); // [1, 2, 3]
```

