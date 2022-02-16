/*
 * @Author: linzhihai
 * @Date: 2021-08-16 14:26:29
 * @LastEditTime: 2021-08-16 14:35:58
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
 */
var findKthLargest = function (nums, k) {
	nums.sort((a, b) => a - b)
	var len = nums.length

	if (k === 1) {
		return nums[len - 1]
	}
	var index = 1

	for (let i = len - 2; i >= 0; i--) {
		if (nums[i] < nums[i + 1]) {
			index++
		}

		if (index === k) {
			break
		}
	}

	return nums[len - k]
}

findKthLargest([3, 2, 1, 5, 6, 4], 2)
// @lc code=end
