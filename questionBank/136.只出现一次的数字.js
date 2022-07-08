/*
 * @Author: linzhihai
 * @Date: 2022-04-19 14:41:44
 * @LastEditTime: 2022-06-22 14:28:09
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	var result = 0

	for (let i = 0; i < nums.length; i++) {
		result = result ^ nums[i]
	}

	return result
}
// @lc code=end
