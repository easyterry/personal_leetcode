/*
 * @Author: linzhihai
 * @Date: 2021-07-22 14:21:06
 * @LastEditTime: 2021-08-16 17:44:48
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * nums = [2,0,2,1,1,0]
 */
var sortColors = function (nums) {
	return nums.sort((a, b) => a - b)
}
// @lc code=end
