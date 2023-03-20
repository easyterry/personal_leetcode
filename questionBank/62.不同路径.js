/*
 * @Author: linzhihai
 * @Date: 2022-08-25 18:28:31
 * @LastEditTime: 2022-12-15 11:04:24
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	// var dp = new Array(n).fill(1)

	// for (let i = 1; i < m; i++) {
	// 	for (let j = 1; j < n; j++) {
	// 		dp[j] = dp[j] + dp[j - 1]
	// 	}
	// }
	// return dp[n - 1]

	var dp = new Array(m).fill(0).map((_) => new Array(n).fill(0))

	for (let i = 0; i < m; i++) {
		dp[i][0] = 1
	}

	for (let j = 0; j < n; j++) {
		dp[0][j] = 1
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
		}
	}

	return dp[m - 1][n - 1]
}
uniquePaths(3, 3)
// @lc code=end
