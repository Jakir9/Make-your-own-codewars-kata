import { twoSum } from "./main";
import { test } from "@jest/globals";

// Define test functions

test("twoSum finds correct indexes for [2, 7, 11, 15] and target 9", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("twoSum finds correct indexes for [3, 2, 4] and target 6", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("twoSum finds correct indexes for [3, 3] and target 6", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("twoSum finds correct indexes for [3, 2, 3] and target 6", () => {
  expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
});

test("twoSum([3,2,4], 5) should return [0,1]", () => {
  expect(twoSum([3, 2, 4], 5)).toEqual([0, 1]);
});

test("twoSum([3,2,4], 7) should return [0,2]", () => {
  expect(twoSum([3, 2, 4], 7)).toEqual([0, 2]);
});

// //for loop for testing random numbers
// for (let i = 0; i < 25; i++) {
//   let rand1 = Math.floor(Math.random() * 100);

//   //make array with 3 or 4 random numbers
//   let arr = [];
//   for (let j = 0; j < Math.floor(Math.random() * 2) + 3; j++) {
//     arr.push(Math.floor(Math.random() * 100));
//   } // find the sum of two random numbers from this array
//   let target =
//     arr[Math.floor(Math.random() * arr.length)] +
//     arr[Math.floor(Math.random() * arr.length)];

//   //test the function

//   test(`twoSum finds correct indexes for ${arr} and target ${target}`, () => {
//     expect(twoSum(arr, target)).toEqual(twoSumSolution(arr, target));
//   });
// }

// function twoSumSolution(nums, target) {
//   let mp = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];

//     if (mp.has(diff)) {
//       return [i, mp.get(diff)];
//     }

//     mp.set(nums[i], i);
//   }
// }
