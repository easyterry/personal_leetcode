/*
 * @Author: linzhihai
 * @Date: 2022-03-23 14:35:53
 * @LastEditTime: 2022-09-05 15:31:49
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	var m = nums.length

	if (m === 1) {
		return nums[0]
	}

	var preMax = nums[0],
		preMin = nums[0],
		ans = nums[0]

	for (let i = 1; i < m; i++) {
		var curr = nums[i]
		var x = preMax,
			y = preMin

		preMax = Math.max(curr * x, curr * y, curr)
		preMin = Math.min(curr * x, curr * y, curr)
		ans = Math.max(preMax, ans)
	}

	return ans
}

maxProduct([2, 3, -2, 4])
// @lc code=end
