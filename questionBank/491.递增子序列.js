/*
 * @Author: linzhihai
 * @Date: 2022-06-22 16:17:27
 * @LastEditTime: 2022-06-22 18:58:28
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

示例 1：
输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
 */
var findSubsequences = function (nums) {
	var res = []
	var dp = []
	dfs(dp, nums, res, 0)
	return res

	function dfs(dp, nums, res, depth) {
		if (dp.length >= 2) {
			res.push(dp.slice())
		}

		var used = []

		for (let i = depth; i < nums.length; i++) {
			if (used.includes(nums[i]) || dp[dp.length - 1] > nums[i]) {
				continue
			}
			dp.push(nums[i])
			dfs(dp, nums, res, i + 1)
			dp.pop()
			used.push(nums[i])
		}
	}
}

findSubsequences([4, 6, 7, 7])
// @lc code=end
