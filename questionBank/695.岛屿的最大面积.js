/*
 * @Author: linzhihai
 * @Date: 2022-09-07 18:24:29
 * @LastEditTime: 2022-09-07 18:35:27
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
	var m = grid.length,
		n = grid[0].length,
		res = 0

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) {
				res = Math.max(res, dfs(grid, i, j))
			}
		}
	}

	return res

	function dfs(grid, i, j) {
		if (i < 0 || j < 0 || i >= m || j >= n) {
			return 0
		}

		if (grid[i][j] === 0) {
			return 0
		}

		grid[i][j] = 0

		return (
			dfs(grid, i - 1, j) +
			dfs(grid, i + 1, j) +
			dfs(grid, i, j - 1) +
			dfs(grid, i, j + 1) +
			1
		)
	}
}
// @lc code=end
