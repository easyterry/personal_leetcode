/*
 * @Author: linzhihai
 * @Date: 2021-08-16 17:50:30
 * @LastEditTime: 2021-08-16 18:10:28
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */
var maxSubArray = function (nums) {
	var result = nums[0]
	var sum = 0

	for (let i = 0; i < nums.length; i++) {
		if (sum > 0) {
			sum += nums[i]
		} else {
			sum = nums[i]
		}

		result = Math.max(result, sum)
	}
	return result
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// @lc code=end
