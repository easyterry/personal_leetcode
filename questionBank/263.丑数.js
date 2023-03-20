/*
 * @Author: linzhihai
 * @Date: 2022-08-26 17:18:31
 * @LastEditTime: 2022-08-26 17:36:26
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 * 丑数 就是只包含质因数 2、3 和 5 的正整数。
给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
 */
var isUgly = function (n) {
	if (n === 1) return true

	if (n === 0) return false

	while (n !== 1) {
		if (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0) return false

		n = n % 2 === 0 ? n / 2 : n % 3 === 0 ? n / 3 : n / 5
	}
	return true
}
// @lc code=end
