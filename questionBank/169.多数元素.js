/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	if (nums.length === 1) return nums[0]

	const middle = nums.length / 2
	const map = new Map()

	for (let i = 0; i < nums.length; i++) {
		const element = nums[i]
		const target = map.get(element)
		if (target + 1 > middle) return element

		map.set(element, (target || 0) + 1)
	}
}
// @lc code=end
