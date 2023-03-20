/*
 * @Author: linzhihai
 * @Date: 2022-08-30 17:33:41
 * @LastEditTime: 2022-09-02 17:06:55
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
示例 1：
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 */
var canPartition = function (nums) {
	var sum = nums.reduce((prev, curr, acc) => prev + curr)
	var n = nums.length

	if (sum % 2 !== 0) {
		return false
	}

	sum /= 2

	var dp = new Array(sum + 1).fill(false)

	dp[0] = true

	for (const num of nums) {
		for (let j = sum; j >= num; j--) {
			dp[j] = dp[j] || dp[j - num]
		}
	}

	return dp[sum]
}

canPartition([1, 2, 5])
// @lc code=end
