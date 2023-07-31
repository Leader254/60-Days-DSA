// Array.push has a 0(1) time complexity
// The time complexity of array.push is O(1) because it performs a constant-time operation,
// regardless of the size of the array. It means that the time taken to add an element to
// the end of the array does not depend on the number of existing elements in the array.
// syntax
// function addEnd(array, element){
//     array.push(element)
//     return array;
// }
// const array = [2,3,4,5,6,7];
// console.log(array, 8)

// Array.push => 0(1) => adds at the end of the array
// const array1 = []; // initialize an empty array
// const n = 10; // number of elements to add to an array

// for(let i = 0; i < n; i++){
//     array1.push(i);
// }
// console.log(array1)

// unshift() => 0(n) => adds element at the beginning of the array
// the runtime of the operation grows linearly with increase in size of the array
// as the number of elements in the array increases, the time taken to perform
// the array.unshift operation also increases proportionally.
// The reason for this time complexity is that when elements are unshifted
// i.e., inserted) at the beginning of the array, all existing elements need to be
// shifted to make space for the new element(s).
// This shifting operation requires iterating over each existing element and moving it
// one position to the right.
// syntax
// shifting one element

// const array = [2,3,4,5,6];
// array.unshift(1);
// console.log(array); // We get [1,2,3,4,5,6]

// shifting multiple elements
// const array1 = [3,4,5,6];
// array1.unshift(0,1,2);
// console.log(array1); // prints 0,1,2,3,4,5,6

// Accessing an element in an array by index => 0(1)
// The time complexity of accessing an element in an array by index is O(1) because
// it performs a constant-time operation, regardless of the size of the array.
// syntax
// const access = (array, index) => {
//     return array[index];
// }

// const array = [1, "Samuel", 3, {name: "Samuel", age: 20}];
// console.log(access(array, 3)); // prints {name: "Samuel", age: 20}
// console.log(access(array, 1)); // prints Samuel

// array.shift() => removing an element from the beginning of the array = 0(n)
// syntax

// const array = [2,3,4,5,6];
// array.shift();
// console.log(array)

// array.shift needs to move each element one position to the left.
// In the worst case, where we are removing the first element, every remaining element
// needs to be shifted. This means that for an array of length n, we need to perform n-1 shifts
// this results to a linear time complexity of O(n) since the time taken to perform the operation
// is proportional to the size of the array.

// array.slice()
// returns an array of elements from the original array defined by the start and end indices.
// array.slice(startIndex, endIndex)
// array.slice() has a time complexity of O(n) because it needs to iterate over each element
// syntax

// slicing a contagious range of elements
// const array = [1,2,3,4,5,6,7,8,9];
// console.log(array.slice(2,5)); // prints [3,4,5]

// // slicing from the start index to the end of the array
// const array2 = [1,2,3,4,5,6,7,8,9];
// const sliced = array2.slice(2 , -1);
// console.log(sliced) // prints [3,4,5,6,7,8]

// // slicing with no arguments
// const array3 = [1,2,3,4,5,6,7,8,9];
// const sliced2 = array3.slice();
// console.log(sliced2) // prints [1,2,3,4,5,6,7,8,9]

// accessing elements in a 1D and 2D array
// 1D array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array[2]); // prints 3

// 2D array

const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(array2D[1][2]); // prints 6
