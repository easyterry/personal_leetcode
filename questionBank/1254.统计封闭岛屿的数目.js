/*
 * @Author: linzhihai
 * @Date: 2022-09-07 17:27:02
 * @LastEditTime: 2022-09-07 17:41:30
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1254 lang=javascript
 *
 * [1254] 统计封闭岛屿的数目
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
	var m = grid.length,
		n = grid[0].length,
		res = 0

	for (let i = 0; i < m; i++) {
		dfs(grid, i, 0)
		dfs(grid, i, n - 1)
	}

	for (let j = 0; j < n; j++) {
		dfs(grid, 0, j)
		dfs(grid, m - 1, j)
	}

	for (let r = 0; r < m; r++) {
		for (let c = 0; c < n; c++) {
			if (grid[r][c] === 0) {
				res++
				dfs(grid, r, c)
			}
		}
	}

	return res

	function dfs(grid, i, j) {
		if (i < 0 || j < 0 || i >= m || j >= n) {
			return
		}

		if (grid[i][j] === 1) {
			return
		}

		grid[i][j] = 1

		dfs(grid, i - 1, j)
		dfs(grid, i + 1, j)
		dfs(grid, i, j - 1)
		dfs(grid, i, j + 1)
	}
}
// @lc code=end
