/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
    字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
    进阶：
    如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

    示例 1：
    输入：s = "abc", t = "ahbgdc"
    输出：true

    示例 2：
    输入：s = "axc", t = "ahbgdc"
    输出：false
 */
var isSubsequence = function (s, t) {
	var sLeft = 0,
		tLeft = 0
	var res = []

	while (tLeft < t.length) {
		if (t[tLeft] === s[sLeft]) {
			res.push(s[sLeft])
			sLeft++
		}

		tLeft++
	}

	return res.length === s.length
}
// @lc code=end
