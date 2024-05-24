/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
	const map = new Map()

	for (let i = 0; i < nums.length; i++) {
		const element = nums[i]
		const target = map.get(element)

		if (target !== undefined && Math.abs(target - i) <= k) {
			return true
		}

		map.set(element, i)
	}

	return false
}

containsNearbyDuplicate([1, 2, 3, 1])
// @lc code=end
