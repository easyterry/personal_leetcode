/*
 * @Author: linzhihai
 * @Date: 2022-08-26 15:11:59
 * @LastEditTime: 2022-08-26 15:45:45
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	var res = []
	nums.sort((a, b) => a - b)

	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue

		threeSum(nums, i, target - nums[i], res)
	}

	return res
}

function threeSum(nums, start, target, res) {
	for (let i = start + 1; i < nums.length; i++) {
		if (i > start + 1 && nums[i] === nums[i - 1]) continue
		
		var left = i + 1,
			right = nums.length - 1

		while (left < right) {
			var sum = nums[i] + nums[left] + nums[right]
			var l = nums[left],
				r = nums[right]

			if (sum > target) {
				right--
			} else if (sum < target) {
				left++
			} else {
				res.push([nums[start], nums[i], nums[left], nums[right]])
				while (left < right && nums[left] === l) left++
				while (left < right && nums[right] === r) right--
			}
		}
	}
}
// @lc code=end
