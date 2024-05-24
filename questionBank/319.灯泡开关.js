/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
	var res = 1
	while (res * res <= n) res++

	return res - 1
}

bulbSwitch(5)
// @lc code=end
