/*
 * @Author: linzhihai
 * @Date: 2021-08-16 11:29:25
 * @LastEditTime: 2021-08-16 12:13:35
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
	var carry = 0,
		len1 = num1.length,
		len2 = num2.length,
		i = len1 - 1,
		j = len2 - 1,
		res = []

	while (i >= 0 || j >= 0) {
		var a = i >= 0 ? num1[i--] - '0' : 0
		var b = j >= 0 ? num2[j--] - '0' : 0
		var sum = a + b + carry
		res.unshift(sum % 10)
		carry = sum >= 10 ? 1 : 0
	}

	if (carry === 1) {
		res.unshift(1)
	}

	return res.join('')
}

addStrings('123', '456')
// @lc code=end
