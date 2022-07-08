/*
 * @Author: linzhihai
 * @Date: 2022-02-16 16:36:45
 * @LastEditTime: 2022-06-22 11:59:01
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	var minPrice = prices[0]
	var maxProfit = 0

	for (let i = 1; i < prices.length; i++) {
		minPrice = Math.min(minPrice, prices[i])

		maxProfit = Math.max(maxProfit, prices[i] - minPrice)
	}

	return maxProfit
}
// @lc code=end
