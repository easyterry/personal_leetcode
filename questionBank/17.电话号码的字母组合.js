/*
 * @Author: linzhihai
 * @Date: 2021-08-13 16:13:32
 * @LastEditTime: 2021-08-17 19:13:48
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 * 输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */
var letterCombinations = function (digits) {
	if (!digits.length || !digits) return []

	const map = new Map([
		['2', 'abc'],
		['3', 'def'],
		['4', 'ghi'],
		['5', 'jkl'],
		['6', 'mno'],
		['7', 'pqrs'],
		['8', 'tuv'],
		['9', 'wxyz'],
	])

	let res = []

	function backtrack(str, current) {
		if (str.length === digits.length) {
			res.push(str)
			return
		}

		const digit = map.get(digits[current])

		for (let i = 0; i < digit.length; i++) {
			backtrack(str + digit[i], current + 1)
		}
	}

	backtrack('', 0)
	return res
}

letterCombinations('23')
// @lc code=end
