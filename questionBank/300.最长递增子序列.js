/*
 * @Author: linzhihai
 * @Date: 2021-08-02 09:54:10
 * @LastEditTime: 2021-08-02 17:38:45
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * [10,9,2,5,3,7,101,18] -> 4
 */
var lengthOfLIS = function (nums) {
	var dp = Array(nums.length).fill(1)
	var res = 0

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
	}

	for (let i = 0; i < dp.length; i++) {
		res = Math.max(res, dp[i])
	}

	return res
}

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
// @lc code=end
