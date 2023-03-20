/*
 * @Author: linzhihai
 * @Date: 2021-08-19 14:22:44
 * @LastEditTime: 2022-08-29 11:22:44
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	var m = grid.length - 1,
		n = grid[0].length - 1

	var memo = new Array(grid.length).fill(0).map((_) => new Array(grid[0].length).fill(-1))

	return dp(grid, m, n)

	function dp(grid, i, j) {
		if (i === 0 && j === 0) {
			return grid[0][0]
		}

		if (i < 0 || j < 0) {
			return Number.MAX_SAFE_INTEGER
		}

		if (memo[i][j] !== -1) {
			return memo[i][j]
		}

		memo[i][j] = Math.min(dp(grid, i - 1, j), dp(grid, i, j - 1)) + grid[i][j]

		return memo[i][j]
	}
}
minPathSum([
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1],
])
// @lc code=end
