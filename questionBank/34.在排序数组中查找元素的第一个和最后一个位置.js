/*
 * @Author: linzhihai
 * @Date: 2022-04-20 15:47:40
 * @LastEditTime: 2022-04-20 16:23:21
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  var startIndex = getIndex(nums, target);

  if (startIndex === nums.length || nums[startIndex] !== target) return [-1, -1];

  return [startIndex, getIndex(nums, target + 1) - 1];
};

var getIndex = function (nums, target) {
  var left = 0;
  var right = nums.length;

  while (left < right) {
    var mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  return right;
};
// @lc code=end

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
