/*
 * @Author: linzhihai
 * @Date: 2022-08-16 19:27:57
 * @LastEditTime: 2022-08-17 11:24:57
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
 */
var findTargetSumWays = function (nums, target) {
  var ans = 0;
  dfs(nums, 0, target);

  return ans;

  function dfs(nums, d, target) {
    if (d >= nums.length) {
      if (target === 0) ++ans;
      return;
    }

    dfs(nums, d + 1, target - nums[d]);
    dfs(nums, d + 1, target + nums[d]);
  }
};
findTargetSumWays([1, 1, 1, 1, 1], 3);
// @lc code=end
