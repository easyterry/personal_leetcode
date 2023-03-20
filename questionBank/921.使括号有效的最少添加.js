/*
 * @Author: linzhihai
 * @Date: 2022-10-27 18:08:50
 * @LastEditTime: 2022-10-27 18:11:25
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
	let need = 0
	let res = 0

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			need++
		} else {
			need--

			if (need === -1) {
				need = 0
				res++
			}
		}
	}

	return need + res
}
// @lc code=end
