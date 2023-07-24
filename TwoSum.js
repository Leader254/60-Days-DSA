// Link: https://leetcode.com/problems/two-sum/
// Using hash map to store the complement of the current element and the target

// let twoSum = function (arr, target) {
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let complement = target - arr[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(arr[i], i);
//   }
//   return [];
// };

// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
// console.log(twoSum([3, 2, 4], 6)); // [1,2]

let twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
