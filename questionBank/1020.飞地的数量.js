/*
 * @Author: linzhihai
 * @Date: 2022-09-07 17:50:04
 * @LastEditTime: 2022-09-07 18:05:33
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * 输入：grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
    输出：3
    解释：有三个 1 被 0 包围。一个 1 没有被包围，因为它在边界上。
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
	var m = grid.length,
		n = grid[0].length,
		res = 0

	for (let r = 0; r < m; r++) {
		dfs(grid, r, 0)
		dfs(grid, r, n - 1)
	}

	for (let c = 0; c < n; c++) {
		dfs(grid, 0, c)
		dfs(grid, m - 1, c)
	}

	for (let r = 0; r < m; r++) {
		for (let c = 0; c < n; c++) {
			if (grid[r][c] === 1) {
				res += 1
			}
		}
	}

	return res

	function dfs(grid, i, j) {
		if (i < 0 || j < 0 || i >= m || j >= n) {
			return
		}

		if (grid[i][j] === 0) {
			return
		}

		grid[i][j] = 0

		dfs(grid, i - 1, j)
		dfs(grid, i + 1, j)
		dfs(grid, i, j - 1)
		dfs(grid, i, j + 1)
	}
}

numEnclaves([
	[0, 0, 0, 0],
	[1, 0, 1, 0],
	[1, 1, 1, 0],
	[1, 0, 0, 0],
])
// @lc code=end
