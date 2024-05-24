/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	var left = 0,
		right = nums.length - 1

	while (left < right) {
		var mid = Math.floor(left + (right - left) / 2)

		if (nums[mid] > nums[right]) {
			left = mid + 1
		} else if (nums[mid] < nums[right]) {
			right = mid
		}
	}

	return nums[left]
}
// @lc code=end
