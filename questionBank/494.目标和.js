/*
 * @Author: linzhihai
 * @Date: 2022-08-16 19:27:57
 * @LastEditTime: 2022-09-02 17:11:45
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
	var sum = nums.reduce((prev, curr) => prev + curr)

	if (sum < target || (sum - target) % 2 !== 0) return 0

	var n = Math.floor((sum - target) / 2)

	var dp = new Array(n + 1).fill(0)

	dp[0] = 1

	for (const num of nums) {
		for (let j = n; j >= num; j--) {
			dp[j] += dp[j - num]
		}
	}

	return dp[n]
}
findTargetSumWays([1, 1, 1, 1, 1], 3)
// @lc code=end
