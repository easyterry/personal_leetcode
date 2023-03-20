/*
 * @Author: linzhihai
 * @Date: 2022-08-26 16:55:14
 * @LastEditTime: 2022-08-26 17:09:33
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	nums.sort((a, b) => a - b)
	var maxLength = 0
	var max = 0

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] - nums[i - 1] > 1) {
			maxLength = Math.max(maxLength, max)
			max = 1
			continue
		}

		if (i > 0 && nums[i] === nums[i - 1]) continue
		max++
	}

	return Math.max(maxLength, max)
}
longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
// @lc code=end
