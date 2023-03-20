/*
 * @Author: linzhihai
 * @Date: 2022-04-19 14:19:48
 * @LastEditTime: 2022-08-22 18:14:56
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 输入：n = 2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
 */
var fib = function (n) {
	var dp = new Array(n + 1).fill(0)
	dp[0] = 0
	dp[1] = 1

	for (let i = 2; i < dp.length; i++) {
		dp[i] = dp[i - 2] + dp[i - 1]
	}

	return dp[n]
}

fib(20)
// @lc code=end
