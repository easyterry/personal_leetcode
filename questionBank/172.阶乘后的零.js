/*
 * @Author: linzhihai
 * @Date: 2022-11-17 17:32:29
 * @LastEditTime: 2023-02-02 18:08:50
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
	var devision = 5
	var res = 0

	while (devision <= n) {
		res += Math.floor(n / devision)
		devision *= 5
	}

	return res
}
// @lc code=end
