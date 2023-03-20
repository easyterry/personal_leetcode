/*
 * @Author: linzhihai
 * @Date: 2022-08-26 17:42:27
 * @LastEditTime: 2022-08-26 17:42:47
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	return Array.from(new Set(nums)).length !== nums.length
}
// @lc code=end
