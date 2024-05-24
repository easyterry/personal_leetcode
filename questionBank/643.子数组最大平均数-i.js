/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。
    请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。
    任何误差小于 10-5 的答案都将被视为正确答案。

    示例 1：
    输入：nums = [1,12,-5,-6,50,3], k = 4
    输出：12.75
    解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

    示例 2：
    输入：nums = [5], k = 1
    输出：5.00000
 */
var findMaxAverage = function (nums, k) {
	var max = 0
	var start = 0
	var end = 0
	var res = Number.MIN_SAFE_INTEGER

	while (end < nums.length) {
		max += nums[end]

		if (end - start === k - 1) {
			res = Math.max(max / k, res)
			max -= nums[start]
			start++
		}
		end++
	}

    return res
}
// @lc code=end
