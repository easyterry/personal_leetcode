/*
 * @Author: linzhihai
 * @Date: 2021-08-18 14:24:29
 * @LastEditTime: 2021-08-18 15:45:45
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * 输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */
var minSubArrayLen = function (target, nums) {
	var sum = 0
	var left = 0,
		right = 0
	var len = nums.length
	var minLen = 0

	while (right < len) {
		while (sum < target && right < len) {
			sum += nums[right++]
		}

		while (sum >= target) {
			minLen = minLen === 0 ? right - left : Math.min(minLen, right - left)
			sum -= nums[left++]
		}
	}

	return minLen
}

minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
// @lc code=end
