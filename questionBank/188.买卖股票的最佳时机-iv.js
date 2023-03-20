/*
 * @Author: linzhihai
 * @Date: 2022-09-22 19:57:27
 * @LastEditTime: 2022-09-22 20:10:54
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
	var n = prices.length
	var dp = Array.from({ length: n }, () =>
		new Array(k + 1).fill(0).map((_) => new Array(2).fill(0))
	)

	for (let i = 0; i < n; i++) {
		dp[i][0][0] = 0
		dp[i][0][1] = Number.MIN_SAFE_INTEGER
	}

	for (let i = 0; i < n; i++) {
		for (let j = k; j >= 1; j--) {
			if (i - 1 < 0) {
				dp[i][j][0] = 0
				dp[i][j][1] = -prices[i]
				continue
			}

			dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
			dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
		}
	}

	return dp[n - 1][k][0]
}
// @lc code=end
