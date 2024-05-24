/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 * 
 * 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
    输出：4
 */
var maximalSquare = function (matrix) {
	var m = matrix.length
	var n = matrix[0].length
	var dp = new Array(m).fill(false).map((_) => new Array(n).fill(0))
	var res = 0

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0 || j === 0) {
				dp[i][j] = matrix[i][j] - '0'
			} else if (matrix[i][j] === '1') {
				dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
			}
			res = Math.max(res, dp[i][j])
		}
	}

	return res * res
}

maximalSquare([
	['1', '0', '1', '0', '0'],
	['1', '0', '1', '1', '1'],
	['1', '1', '1', '1', '1'],
	['1', '0', '0', '1', '0'],
])
// @lc code=end
