/*
 * @Author: linzhihai
 * @Date: 2022-09-06 15:35:05
 * @LastEditTime: 2022-09-06 15:56:41
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

/**
 * 给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。
你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
返回获得利润的最大值。
注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

示例 1：
输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
输出：8
解释：能够达到的最大利润:  
在此处买入 prices[0] = 1
在此处卖出 prices[3] = 8
在此处买入 prices[4] = 4
在此处卖出 prices[5] = 9
总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
	var dp_i_0 = 0
	var dp_i_1 = 0

	for (let i = 0; i < prices.length; i++) {
		if (i - 1 < 0) {
			dp_i_0 = 0
			dp_i_1 = -prices[i] - fee
			continue
		}

		dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
		dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i] - fee)
	}

	return dp_i_0
	// var m = prices.length;
	// var dp = Array.from({ length: m }, () => new Array(2).fill(0));

	// for (let i = 0; i < prices.length; i++) {
	//   if (i - 1 < 0) {
	//     dp[i][0] = 0;
	//     dp[i][1] = -prices[i] - fee;
	//     continue;
	//   }

	//   dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
	//   dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee);
	// }

	// return dp[m - 1][0];
}
// @lc code=end
