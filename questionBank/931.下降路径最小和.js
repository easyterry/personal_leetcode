/*
 * @Author: linzhihai
 * @Date: 2022-08-29 19:09:32
 * @LastEditTime: 2022-08-30 10:07:45
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
	var m = matrix.length
	var n = matrix[0].length
	var dp = Array.from({ length: m }, () => new Array(n).fill(0))

	for (let i = 0; i < m; i++) {
		dp[i][0] = matrix[i][0]
	}

	for (let j = 0; j < n; j++) {
		dp[0][j] = matrix[0][j]
	}

	for (let i = 1; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (j > 0 && j < n - 1) {
				dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i - 1][j + 1]) + matrix[i][j]
			} else if (j === 0) {
				dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j + 1]) + matrix[i][j]
			} else if (j === n - 1) {
				dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + matrix[i][j]
			}
		}
	}

	return Math.min.apply(null, dp[m - 1])
}
minFallingPathSum([
	[2, 1, 3],
	[6, 5, 4],
	[7, 8, 9],
])
// @lc code=end
