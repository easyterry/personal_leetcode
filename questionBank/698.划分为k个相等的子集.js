/*
 * @Author: linzhihai
 * @Date: 2022-09-24 17:15:14
 * @LastEditTime: 2022-09-24 18:13:00
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

/**
 * 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
    示例 1：
    输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
    输出： true
    说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。

    示例 2:
    输入: nums = [1,2,3,4], k = 3
    输出: false 

    示例 3:
    输入: nums = [2,2,2,2,3,4,5], k = 4
    输出: false 
*/

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
	const sum = nums.reduce((prev, curr) => prev + curr)

	if (sum % k) {
		return false
	}

	nums.sort((a, b) => a - b)
	const n = nums.length
	const used = new Array(n).fill(false)

	return dfs(nums, k, sum / k, 0, 0, used)

	function dfs(nums, k, target, start, currentNum, used) {
		if (k === 1) return true
		if (currentNum > target) return false
		if (currentNum === target) return dfs(nums, k - 1, target, 0, 0, used)

		for (let i = start; i < n; i++) {
			if (used[i]) continue
			used[i] = true
			if (dfs(nums, k, target, i + 1, currentNum + nums[i], used)) return true
			used[i] = false
		}

		return false
	}
}

canPartitionKSubsets([2, 2, 2, 2, 3, 4, 5], 4)
// @lc code=end
