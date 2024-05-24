/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
	var preDiff = 0,
		currDiff = 0
	var result = 1

	for (let i = 0; i < nums.length; i++) {
		currDiff = nums[i + 1] - nums[i]

		if ((preDiff >= 0 && currDiff < 0) || (preDiff <= 0 && currDiff > 0)) {
			preDiff = currDiff
			result++
		}
	}

	return result
}
// @lc code=end
