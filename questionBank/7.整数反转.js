/*
 * @Author: linzhihai
 * @Date: 2022-02-16 18:07:14
 * @LastEditTime: 2022-04-19 16:36:38
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	var res = 0
	var MAX_VALUE = Math.pow(2, 31) - 1
	var MIN_VALUE = -Math.pow(2, 31)

	while (x != 0) {
		var temp = x % 10

		if (res > MAX_VALUE / 10 || (res === MAX_VALUE / 10 && temp > 7)) return 0
		if (res < MIN_VALUE / 10 || (res === MIN_VALUE / 10 && temp < -8)) return 0

		res = res * 10 + (x % 10)
		x = Math.trunc(x / 10)
	}

	return res
}
// @lc code=end

reverse(123)
