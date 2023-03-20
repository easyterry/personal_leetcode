/*
 * @Author: linzhihai
 * @Date: 2022-09-08 10:07:07
 * @LastEditTime: 2022-09-08 10:44:03
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1905 lang=javascript
 *
 * [1905] 统计子岛屿
 */

// @lc code=start
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
	var m = grid1.length,
		n = grid1[0].length
	var res = 0

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid1[i][j] === 0 && grid2[i][j] === 1) {
				dfs(grid2, i, j)
			}
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid2[i][j] === 1) {
				res += 1
				dfs(grid2, i, j)
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

		dfs(grid, i - 1, j)
		dfs(grid, i + 1, j)
		dfs(grid, i, j - 1)
		dfs(grid, i, j + 1)
	}
}

countSubIslands(
	[
		[1, 1, 1, 0, 0],
		[0, 1, 1, 1, 1],
		[0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 0, 1, 1],
	],
	[
		[1, 1, 1, 0, 0],
		[0, 0, 1, 1, 1],
		[0, 1, 0, 0, 0],
		[1, 0, 1, 1, 0],
		[0, 1, 0, 1, 0],
	]
)
// @lc code=end
