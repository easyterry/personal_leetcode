/*
 * @Author: linzhihai
 * @Date: 2022-04-19 14:41:43
 * @LastEditTime: 2022-07-06 18:22:30
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (target <= nums[i]) {
			return i
		}
	}

	return nums.length
}
// @lc code=end
