/*
 * @Author: linzhihai
 * @Date: 2022-08-29 15:42:18
 * @LastEditTime: 2022-08-29 18:30:09
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	var m = obstacleGrid.length - 1
	var n = obstacleGrid[0].length - 1
	var dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))

	for (let i = 0; i <= m; i++) {
		if (obstacleGrid[i][0] === 1) {
			break
		}
		dp[i][0] = 1
	}

	for (let j = 0; j <= n; j++) {
		if (obstacleGrid[0][j] === 1) {
			break
		}
		dp[0][j] = 1
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (obstacleGrid[i][j] === 1) {
				continue
			}
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
		}
	}

	return dp[m][n]
}
uniquePathsWithObstacles([
	[0, 0, 0],
	[0, 1, 0],
	[0, 0, 0],
])
// @lc code=end
