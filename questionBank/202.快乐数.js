/*
 * @Author: linzhihai
 * @Date: 2022-07-07 15:15:58
 * @LastEditTime: 2022-07-07 15:33:31
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	var hash = {}
	while (n !== 1) {
		if (hash[n]) return false
		hash[n] = true
		n = sum(n)
	}
	return true
}

var sum = function (n) {
	var sum = 0
	while (n) {
		sum += Math.pow(n % 10, 2)
		n = Math.floor(n / 10)
	}
	return sum
}

// @lc code=end
