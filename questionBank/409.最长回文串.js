/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
    在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

    示例 1:
    输入:s = "abccccdd"
    输出:7
    解释:
    我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 */
var longestPalindrome = function (s) {
	var obj = {}
	var res = 0

	for (let i = 0; i < s.length; i++) {
		obj[s[i]] = (obj[s[i]] || 0) + 1

		if (obj[s[i]] % 2 === 0) {
			res += 2
		}
	}

	return s.length > res ? res + 1 : res
}

longestPalindrome('abccccdd')
// @lc code=end
