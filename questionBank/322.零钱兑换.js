/*
 * @Author: linzhihai
 * @Date: 2021-08-10 09:36:24
 * @LastEditTime: 2021-08-10 11:37:34
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
 */
var coinChange = function (coins, amount) {
	var dp = new Array(amount + 1).fill(amount + 1, 0, amount + 1)
	dp[0] = 0

	for (let i = 0; i < dp.length; i++) {
		for (const coin of coins) {
			if (i - coin < 0) continue

			dp[i] = Math.min(dp[i], dp[i - coin] + 1)
		}
	}

	return dp[amount] === amount + 1 ? -1 : dp[amount]
}

coinChange([1, 2, 5], 11)
// @lc code=end
