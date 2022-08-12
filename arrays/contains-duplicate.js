/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  for (i = 0; i < nums.length; i++) {
    let x = nums[i];
    for (j = i + 1; j < nums.length; j++) {
      let y = nums[j];
      if (x === y) {
        return true;
      }
    }
  }
  return false;
};

var containsDuplicateSet = function (nums) {
  return nums.length === new Set(nums).size ? false : true;
};
