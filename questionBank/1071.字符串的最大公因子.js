/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * 对于字符串 s 和 t，只有在 s = t + ... + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。
    给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。

    示例 1：
    输入：str1 = "ABCABC", str2 = "ABC"
    输出："ABC"
 */
var gcdOfStrings = function (str1, str2) {
	const len1 = str1.length
	const len2 = str2.length

	for (let i = Math.min(len1, len2); i >= 1; i--) {
		if (len1 % i === 0 && len2 % i === 0) {
			const x = str1.substring(0, i)

			if (check(x, str1) && check(x, str2)) {
				return x
			}
		}
	}

	return ''

	function check(s, t) {
		const len = t.length / s.length
		const ans = []

		for (let i = 1; i <= len; i++) {
			ans.push(s)
		}

		return ans.join('') === t
	}
}

gcdOfStrings('ABCABC', 'ABC')
// @lc code=end
