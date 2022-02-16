/*
 * @Author: linzhihai
 * @Date: 2021-07-29 15:43:32
 * @LastEditTime: 2021-07-29 16:50:46
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 输入：[1,2,3,1]
 * 输出：4
 */
var rob = function (nums) {
	var dp = Array(nums.length + 1)
	dp[0] = 0
	dp[1] = nums[0]

    // nums   [1, 2, 3, 1]
    // dp      [0, 1, 2, 4, 4]

	for (let i = 2; i <= nums.length; i++) {
		dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
	}

	return dp[nums.length]
}

rob([1, 2, 3, 1])
// @lc code=end
