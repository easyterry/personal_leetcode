/*
 * @Author: linzhihai
 * @Date: 2021-07-29 15:07:36
 * @LastEditTime: 2022-09-07 17:22:09
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	const m = grid.length
	const n = grid[0].length
	let nums = 0

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === '1') {
				nums++
				dfs(grid, i, j)
			}
		}
	}

	return nums

	function dfs(grid, i, j) {
		if (!checkInIsland(grid, i, j)) return

		if (grid[i][j] !== '1') return

		grid[i][j] = '0'

		dfs(grid, i + 1, j)
		dfs(grid, i - 1, j)
		dfs(grid, i, j + 1)
		dfs(grid, i, j - 1)
	}
}

var checkInIsland = function (grid, r, c) {
	return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length
}

numIslands([
	['1', '1', '0', '1', '1'],
	['1', '0', '0', '0', '0'],
	['0', '0', '0', '0', '1'],
	['1', '1', '0', '1', '1'],
])
// @lc code=end
