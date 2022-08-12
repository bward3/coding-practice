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
  return [];
};

var twoSumFast = function (nums, target) {
  let hash = {};
  for (i = 0; i < nums.length; i++) {
    let dif = target - nums[i];
    if (hash[dif.toString()] !== undefined) {
      return [i, hash[dif.toString()]];
    }
    hash[nums[i].toString()] = i;
  }
};

console.log(twoSumFast([2, 7, 11, 15], 9));
