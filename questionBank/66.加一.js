/*
 * @Author: linzhihai
 * @Date: 2021-07-20 11:17:03
 * @LastEditTime: 2021-07-29 10:37:10
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	var total = 1

	for (let i = digits.length - 1; i >= 0; i--) {
		digits[i] = (digits[i] + total) % 10
		total = digits[i] === 0 ? 1 : 0

		if (total === 0) break
	}

	if (total === 1) {
		digits.unshift(1)
	}

	return digits
}

plusOne([2, 9])
// @lc code=end
