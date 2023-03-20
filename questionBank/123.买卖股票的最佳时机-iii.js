/*
 * @Author: linzhihai
 * @Date: 2022-09-22 16:52:23
 * @LastEditTime: 2022-09-22 19:56:59
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

/**
 * 输入：prices = [1,2,3,4,5]
    输出：4
    解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。   
        注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
        因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	var dp_i10 = 0,
		dp_i11 = Number.MIN_SAFE_INTEGER
	var dp_i20 = 0,
		dp_i21 = Number.MIN_SAFE_INTEGER

	for (const price of prices) {
		dp_i20 = Math.max(dp_i21 + price, dp_i20)
		dp_i21 = Math.max(dp_i10 - price, dp_i21)
		dp_i10 = Math.max(dp_i11 + price, dp_i10)
		dp_i11 = Math.max(-price, dp_i11)
	}

	return dp_i20
}
// @lc code=end
