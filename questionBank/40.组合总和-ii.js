/*
 * @Author: linzhihai
 * @Date: 2022-09-13 15:36:08
 * @LastEditTime: 2022-09-13 15:44:43
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	candidates.sort((a, b) => a - b)

	var path = []
	var res = []
	var sum = 0

	backtrack(candidates, 0)

	return res

	function backtrack(candidates, depth) {
		// 终止条件：sum = target
		if (sum >= target) {
			if (sum === target) {
				res.push(path.slice())
			}
			return
		}

		for (let i = depth; i < candidates.length; i++) {
			if (sum + candidates[i] > target) {
				return
			}

			if (i > depth && candidates[i] === candidates[i - 1]) {
				continue
			}

			path.push(candidates[i])
			sum += candidates[i]
			backtrack(candidates, i + 1)
			path.pop()
			sum -= candidates[i]
		}
	}
}
// @lc code=end
