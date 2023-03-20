/*
 * @Author: linzhihai
 * @Date: 2022-08-25 11:44:55
 * @LastEditTime: 2022-08-25 14:12:49
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	var left = 0,
		right = nums.length - 1

	while (left < right) {
		var mid = Math.floor(left + (right - left) / 2)

		if (nums[mid] < nums[mid + 1]) {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return left
}
findPeakElement([1, 2, 3, 1])
// [1,2,1,3,5,6,4]
// @lc code=end
