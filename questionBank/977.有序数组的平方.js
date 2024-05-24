/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

    示例 1：
    输入：nums = [-4,-1,0,3,10]
    输出：[0,1,9,16,100]
    解释：平方后，数组变为 [16,1,0,9,100]
    排序后，数组变为 [0,1,9,16,100]
 */
var sortedSquares = function (nums) {
	var left = 0,
		right = nums.length - 1,
		k = nums.length - 1
	var result = []

	while (left <= right) {
		if (nums[left] * nums[left] < nums[right] * nums[right]) {
			result[k--] = nums[right] * nums[right]
			right--
		} else {
			result[k--] = nums[left] * nums[left]
			left++
		}
	}

	return result
}
// @lc code=end
