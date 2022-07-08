/*
 * @Author: linzhihai
 * @Date: 2021-07-22 14:21:06
 * @LastEditTime: 2022-07-06 19:06:16
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
	for (let i = 0; i < nums.length; i++) {
		if (i && nums[i] === nums[i - 1]) continue

		var left = i
		var right = nums.length - 1

		while (left < right) {
			if (nums[left] > nums[right]) {
				var tmp = nums[left]
				nums[left] = nums[right]
				nums[right] = tmp
			}
			right--
		}
	}
}
// @lc code=end
