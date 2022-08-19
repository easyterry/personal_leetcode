/*
 * @Author: linzhihai
 * @Date: 2022-06-22 19:21:31
 * @LastEditTime: 2022-06-22 19:25:38
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

示例 1：
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */
var subsets = function (nums) {
	var res = []
	var dp = []
	dfs(0)
	return res

	function dfs(start) {
		if (start > nums.length) return

		res.push(dp.slice())

		for (let i = start; i < nums.length; i++) {
			dp.push(nums[i])
			dfs(i + 1)
			dp.pop()
		}
	}
}
// @lc code=end
