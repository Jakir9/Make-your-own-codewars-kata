/* 
👉 Write your kata here!
*/

// The task is to find the indices of two numbers in an nums of integers that add up to a given target.
//It is assumed that there is exactly one solution for each input, and the same element cannot be used twice.
//The output can be in any order.Three examples are given to illustrate the problem,
//with their corresponding inputs and outputs.

// Example 1:
// Input: nums = [2,7,11,15], target = 17
// Output: [0,3]
// Explanation: Because nums[0] + nums[3] == 17, we return [0, 3].

// Example 2:
// Input: nums = [3,2,4], target = 5
// Output: [0,1]

// Example 3:
// Input: nums = [3,3,5], target = 6
// Output: [0,1]

//👉 Write the function your CodeWarriors will start with below here:

export function twoSum(nums, target) {
  //👉 Write your code here:
  let indexes = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes;
}
