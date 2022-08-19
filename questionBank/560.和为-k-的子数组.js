/*
 * @Author: linzhihai
 * @Date: 2022-08-16 18:07:30
 * @LastEditTime: 2022-08-16 19:19:49
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @description 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  var res = 0;
  var sum = 0;
  var map = new Map();
  
  map.set(0, 1);
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      res += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return res;
};

subarraySum([1, 2, 3], 3);
// @lc code=end
