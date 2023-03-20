/*
 * @Author: linzhihai
 * @Date: 2022-09-17 11:25:14
 * @LastEditTime: 2022-09-17 11:47:34
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
	var n = prices.length

	if (n === 1) {
		return prices
	}

	var stack = []
	var res = []

	for (let i = n - 1; i >= 0; i--) {
		while (stack.length && stack[stack.length - 1] > prices[i]) {
			stack.pop()
		}

		if (stack.length) {
			res[i] = prices[i] - stack[stack.length - 1]
		} else {
			res[i] = prices[i]
		}
		stack.push(prices[i])
	}

	return res
}

finalPrices([8, 4, 6, 2, 3])
// @lc code=end
