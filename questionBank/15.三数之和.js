/*
 * @Author: linzhihai
 * @Date: 2021-08-12 15:44:23
 * @LastEditTime: 2022-04-13 19:05:20
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
 */
var threeSum = function (nums) {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
        continue;
      }

      if (sum < 0) {
        left++;
        continue;
      }

      res.push([nums[i], nums[left], nums[right]]);

      while (left < right && nums[left] === nums[++left]);
      while (left < right && nums[right] === nums[--right]);
    }
  }

  return res;
};

threeSum([-1, 0, 1, 2, -1, -4]);
// @lc code=end
