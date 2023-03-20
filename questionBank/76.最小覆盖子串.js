/*
 * @Author: linzhihai
 * @Date: 2022-11-18 10:45:57
 * @LastEditTime: 2022-11-18 19:15:02
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 
    注意：
    对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
    如果 s 中存在这样的子串，我们保证它是唯一的答案。
 
    示例 1：
    输入：s = "ADOBECODEBANC", t = "ABC"
    输出："BANC"
 */
var minWindow = function (s, t) {
	var left = 0,
		right = 0,
		valid = 0,
		start = 0
	var len = Number.MAX_SAFE_INTEGER

	var need = {},
		window = {}

	for (let i = 0; i < t.length; i++) {
		var a = t[i]

		need[a] = need[a] + 1 || 1
		window[a] = 0
	}

	while (right < s.length) {
		var c = s[right]

		right++

		if (need[c]) {
			window[c]++
			if (window[c] === need[c]) {
				valid++
			}
		}

		while (valid === Object.keys(need).length) {
			if (right - left < len) {
				start = left
				len = right - left
			}

			var d = s[left]
			left++

			if (need[d]) {
				if (window[d] === need[d]) {
					valid--
				}
				window[d]--
			}
		}
	}

	return len === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, len)
}

minWindow('ADOBECODEBANC', 'ABC')
// @lc code=end
