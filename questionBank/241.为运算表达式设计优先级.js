/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
	var res = []

	for (let i = 0; i < expression.length; i++) {
		var c = expression[i]

		if (c === '+' || c === '-' || c === '*') {
			var left = diffWaysToCompute(expression.substring(0, i))
			var right = diffWaysToCompute(expression.substring(i + 1))

			for (const a of left) {
				for (const b of right) {
					if (c === '+') {
						res.push(parseInt(a) + parseInt(b))
					} else if (c === '-') {
						res.push(parseInt(a) - parseInt(b))
					} else if (c === '*') {
						res.push(parseInt(a) * parseInt(b))
					}
				}
			}
		}
	}

	if (res.length === 0) {
		res.push(parseInt(expression))
	}

	return res
}

diffWaysToCompute('2*3-4*5')
// @lc code=end
