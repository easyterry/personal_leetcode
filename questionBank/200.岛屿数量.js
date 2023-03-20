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
	var nums = 0

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			if (grid[r][c] === '1') {
				nums++
				dfs(grid, r, c)
			}
		}
	}

	function dfs(grid, r, c) {
		if (!checkInIsland(grid, r, c)) {
			return 0
		}

		if (grid[r][c] !== '1') {
			return 0
		}

		grid[r][c] = '2'

		dfs(grid, r - 1, c)
		dfs(grid, r + 1, c)
		dfs(grid, r, c - 1)
		dfs(grid, r, c + 1)
	}

	return nums
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
