/*
 * @Author: linzhihai
 * @Date: 2022-04-19 14:41:44
 * @LastEditTime: 2022-07-07 14:59:06
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
测试用例的答案是一个 32-位 整数。
子数组 是数组的连续子序列。
 */
var maxProduct = function (nums) {
	var max = nums[0]
	var min = nums[0]
	var maxProduct = nums[0]
	for (let i = 1; i < nums.length; i++) {
		var tmp = max
		max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i])
		min = Math.min(Math.min(tmp * nums[i], min * nums[i]), nums[i])
		maxProduct = Math.max(maxProduct, max)
	}
	return maxProduct
}
// @lc code=end
maxProduct([2, 3, -2, 4])
