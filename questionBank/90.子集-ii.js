/*
 * @Author: linzhihai
 * @Date: 2022-09-06 18:47:19
 * @LastEditTime: 2022-09-06 18:54:43
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	var res = []
	var path = []
    
	nums.sort((a, b) => a - b)
	backtrack(nums, 0)
	return res

	function backtrack(nums, depth) {
		res.push(path.slice())

		for (let i = depth; i < nums.length; i++) {
			if (i > depth && nums[i] === nums[i - 1]) continue

			path.push(nums[i])
			backtrack(nums, i + 1)
			path.pop()
		}
	}
}
// @lc code=end
