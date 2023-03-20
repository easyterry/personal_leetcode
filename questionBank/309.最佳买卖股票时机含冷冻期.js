/*
 * @Author: linzhihai
 * @Date: 2022-09-06 14:16:29
 * @LastEditTime: 2022-09-06 14:35:30
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	var m = prices.length
	var dp = Array.from({ length: m }, () => new Array(2).fill(0))

	for (let i = 0; i < prices.length; i++) {
		if (i - 1 < 0) {
			dp[i][0] = 0
			dp[i][1] = -prices[i]
			continue
		}

		if (i - 2 < 0) {
			dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
			dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
			continue
		}

		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
		dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
	}

	return dp[m - 1][0]
}
// @lc code=end
