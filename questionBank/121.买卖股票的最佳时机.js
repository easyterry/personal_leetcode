/*
 * @Author: linzhihai
 * @Date: 2021-07-22 16:53:02
 * @LastEditTime: 2023-02-08 19:00:37
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
 * 输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 */
var maxProfit = function (prices) {
	var m = prices.length
	var max = 0
	var price = prices[0]

	for (let i = 0; i < m; i++) {
		if (price < prices[i]) {
			max = Math.max(max, prices[i] - price)
		} else {
	        price = prices[i]
		}
	}

	return max
}
// @lc code=end
