/*
 * @Author: linzhihai
 * @Date: 2022-09-02 10:31:31
 * @LastEditTime: 2022-09-02 17:44:50
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
	var m = coins.length
	var dp = Array.from({ length: m + 1 }, () => new Array(amount + 1).fill(0))

	dp[0][0] = 1

	for (let i = 1; i <= m; i++) {
		for (let j = 0; j <= amount; j++) {
			dp[i][j] = dp[i - 1][j]
			if (j - coins[i - 1] >= 0) {
				dp[i][j] += dp[i][j - coins[i - 1]]
			}
		}
	}

	return dp[m][amount]

	// var dp = new Array(amount + 1).fill(0)

	// dp[0] = 1

	// for (const coin of coins) {
	// 	for (let j = coin; j <= amount; j++) {
	// 		dp[j] += dp[j - coin]
	// 	}
	// }

	// return dp[amount]
}

change(5, [1, 2, 5])
// @lc code=end
