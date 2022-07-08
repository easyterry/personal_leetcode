/*
 * @Author: linzhihai
 * @Date: 2021-08-12 15:44:23
 * @LastEditTime: 2022-06-24 11:42:17
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
 */
var threeSum = function (nums) {
	nums.sort((a, b) => a - b)
	var res = []

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			return res
		}

		if (i > 0 && nums[i] === nums[i - 1]) continue

		var left = i + 1
		var right = nums.length - 1

		while (left < right) {
			if (nums[i] + nums[left] + nums[right] > 0) {
				right--
				while (left < right && nums[right] === nums[right + 1]) right--
			} else if (nums[i] + nums[left] + nums[right] < 0) {
				left++
				while (left < right && nums[left] === nums[left - 1]) left++
			} else {
				res.push([nums[i], nums[left], nums[right]])
				while (left < right && nums[left] === nums[left + 1]) left++
				while (left < right && nums[right] === nums[right - 1]) right--

				right--
				left++
			}
		}
	}

	return res
}

threeSum([-1, 0, 1, 2, -1, -4])
// @lc code=end
