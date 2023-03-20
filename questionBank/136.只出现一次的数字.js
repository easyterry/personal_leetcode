/*
 * @Author: linzhihai
 * @Date: 2022-02-16 18:56:31
 * @LastEditTime: 2022-09-27 18:06:46
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
	var res = 0

	for (const num of nums) {
		res ^= num
	}

	return res
}
// @lc code=end
