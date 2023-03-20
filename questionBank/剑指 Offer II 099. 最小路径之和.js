/*
 * @Author: linzhihai
 * @Date: 2022-08-30 11:10:59
 * @LastEditTime: 2022-08-30 11:15:39
 * @Description:
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	var m = grid.length,
		n = grid[0].length

	var dp = Array.from({ length: m }, () => new Array(n).fill(0))

	for (let i = 0; i < m; i++) {
		if (i === 0) {
			dp[i][0] = grid[i][0]
		} else {
			dp[i][0] = grid[i][0] + dp[i - 1][0]
		}
	}

	for (let j = 0; j < n; j++) {
		if (j === 0) {
			dp[0][j] = grid[0][j]
		} else {
			dp[0][j] = grid[0][j] + dp[0][j - 1]
		}
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
		}
	}

	return dp[m - 1][n - 1]
}
