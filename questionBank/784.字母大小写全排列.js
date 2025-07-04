/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 *
 * https://leetcode.cn/problems/letter-case-permutation/description/
 *
 * algorithms
 * Medium (72.56%)
 * Likes:    580
 * Dislikes: 0
 * Total Accepted:    115.2K
 * Total Submissions: 158.8K
 * Testcase Example:  '"a1b2"'
 *
 * 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。
 * 返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。
 *
 * 示例 1：
 * 输入：s = "a1b2c3"
 * 输出：["a1b2", "a1B2", "A1b2", "A1B2"]
 *
 * [a1, A1] -> [a1B2, A1b2, a1b2, A1B2]
 *
 * 示例 2:
 * 输入: s = "3z4"
 * 输出: ["3z4","3Z4"]
 *
 * 提示:
 * 1 <= s.length <= 12
 * s 由小写英文字母、大写英文字母和数字组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
	const res = []

	backtrack('', 0)

	return res

	function backtrack(currentStr, i) {
		if (currentStr.length === s.length) {
			res.push(currentStr)
			return
		}

		if (s[i].match(/[a-zA-Z]/)) {
			backtrack(currentStr + s[i].toLowerCase(), i + 1)
			backtrack(currentStr + s[i].toUpperCase(), i + 1)
		} else {
			backtrack(currentStr + s[i], i + 1)
		}
	}
}

letterCasePermutation('a1b2')
// @lc code=end
