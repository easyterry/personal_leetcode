/*
 * @Author: linzhihai
 * @Date: 2022-04-19 14:41:43
 * @LastEditTime: 2022-07-06 20:09:47
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	var best = 10000000
	nums.sort((a, b) => a - b)

	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue

		var left = i + 1
		var right = nums.length - 1

		while (left < right) {
			var sum = nums[i] + nums[left] + nums[right]

			if (sum === target) return target

			if (Math.abs(sum - target) < Math.abs(best - target)) {
				best = sum
			}

			if (sum > target) {
				right--
				while (left < right && nums[right] === nums[right + 1]) right--
			} else {
				left++
				while (left < right && nums[left] === nums[left - 1]) left++
			}
		}
	}

	return best
}
// @lc code=end
