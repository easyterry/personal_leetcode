/*
 * @Author: linzhihai
 * @Date: 2022-04-15 14:49:17
 * @LastEditTime: 2022-04-15 15:16:23
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

var reverse = function (nums, left, right) {
  while (left < right) {
    var tmp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = tmp;
  }
};
// @lc code=end
