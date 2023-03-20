/*
 * @Author: linzhihai
 * @Date: 2022-09-06 19:19:29
 * @LastEditTime: 2022-09-06 19:25:53
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	var m = nums.length
	var used = new Array(m).fill(false)
	var path = []
	var res = []
	nums.sort((a, b) => a - b)

	backtrack(nums)

	return res

	function backtrack(nums) {
		if (path.length === nums.length) {
			res.push(path.slice())
			return
		}

		for (let i = 0; i < nums.length; i++) {
			if (used[i]) {
				continue
			}

			if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
				continue
			}

			path.push(nums[i])
			used[i] = true
			backtrack(nums)
			path.pop()
			used[i] = false
		}
	}
}
// @lc code=end
