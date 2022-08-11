/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    let x = nums[i];
    for (j = i + 1; j < nums.length; j++) {
      let y = nums[j];
      if (x + y === target) {
        return [i, j];
      }
    }
  }
  return -1;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([30, 6, 13, 11], 19));
console.log(twoSum([1, 6, 22, 14, 123, 55], 56));
console.log(twoSum([2, 7, -1, 15], 6));
console.log(twoSum([7, 102, 12, 41, 12, 4, 8, 76, 12], 16));
console.log(twoSum([7, 102, 12, 41, 12, 4, 8, 76, 12], 1));
