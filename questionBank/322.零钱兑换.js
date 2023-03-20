/*
 * @Author: linzhihai
 * @Date: 2021-08-10 09:36:24
 * @LastEditTime: 2022-09-02 16:27:12
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
你可以认为每种硬币的数量是无限的。
 */
var coinChange = function (coins, amount) {
	// var dp = new Array(amount + 1).fill(amount + 1)

	// dp[0] = 0

	// for (const coin of coins) {
	// 	for (let i = coin; i <= amount; i++) {
	// 		dp[i] = Math.min(dp[i], dp[i - coin] + 1)
	// 	}
	// }

	// return dp[amount] > amount ? -1 : dp[amount]

	var m = coins.length

	var dp = Array.from({ length: m + 1 }, () => new Array(amount + 1).fill(amount + 1))

	for (let i = 0; i <= m; i++) {
		dp[i][0] = 0
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= amount; j++) {
			dp[i][j] = dp[i - 1][j]

			if (j - coins[i - 1] >= 0) {
				dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1)
			}
		}
	}

	return dp[m][amount] > amount ? -1 : dp[m][amount]
}

coinChange([1, 2, 5], 11)

// @lc code=end
