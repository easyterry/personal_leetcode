/*
 * @Author: linzhihai
 * @Date: 2022-09-14 10:20:52
 * @LastEditTime: 2022-09-14 11:13:50
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	var m = num1.length,
		n = num2.length
	var res = new Array(m + n).fill(0)

	for (let i = m - 1; i >= 0; i--) {
		for (let j = n - 1; j >= 0; j--) {
			var mul = (num1[i] - '0') * (num2[j] - '0')
			var p1 = i + j,
				p2 = i + j + 1
			var sum = mul + res[p2]

			res[p2] = sum % 10
			res[p1] += Math.floor(sum / 10)
		}
	}

	var i = 0

	while (i < res.length && res[i] == 0) {
		i++
	}

	var str = ''
	for (; i < res.length; i++) {
		str += res[i]
	}

    return str.length === 0 ? '0' : str
}
// @lc code=end
