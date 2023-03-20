/*
 * @Author: linzhihai
 * @Date: 2021-08-12 15:44:23
 * @LastEditTime: 2022-08-26 14:31:05
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
	var res = []
	nums.sort((a, b) => a - b)

	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue
		}

		var left = i + 1,
			right = nums.length - 1

		while (left < right) {
			var sum = nums[i] + nums[left] + nums[right]
			var l = nums[left],
				r = nums[right]

			if (sum > 0) {
				right--
			} else if (sum < 0) {
				left++
			} else {
				res.push([nums[i], nums[left], nums[right]])
				while (left < right && nums[left] === l) left++
				while (left < right && nums[right] === r) right--
			}
		}
	}
	return res
}

threeSum([-1, 0, 1, 2, -1, -4])
// @lc code=end
