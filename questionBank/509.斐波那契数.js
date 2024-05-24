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
	let memo = new Array(n + 1).fill(0)

	return dp(memo, n)

	function dp(memo, n) {
		if (n === 1 || n === 0) return n
		if (memo[n] !== 0) return memo[n]

		memo[n] = dp(memo, n - 1) + dp(memo, n - 2)

		return memo[n]
	}
}

fib(20)
// @lc code=end
