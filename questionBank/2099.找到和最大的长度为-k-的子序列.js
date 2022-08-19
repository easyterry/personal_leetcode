/*
 * @Author: linzhihai
 * @Date: 2022-06-30 10:05:05
 * @LastEditTime: 2022-07-01 16:30:55
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=2099 lang=javascript
 *
 * [2099] 找到和最大的长度为 K 的子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 */
var maxSubsequence = function (nums, k) {
	var sum = 0
	var res = 0
	var map = new Map()

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]

		if (sum === k) {
			res = i + 1
		} else if (map.has(sum - k)) {
			res = Math.max(res, i - map.get(sum - k))
		}

		if (!map.has(sum - k)) {
			map.set(sum, i)
		}
	}
	return res
}

maxSubsequence([1, -1, 5, -2, 3], 3)
// @lc code=end
