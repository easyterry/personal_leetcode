/*
 * @Author: linzhihai
 * @Date: 2022-11-18 10:56:03
 * @LastEditTime: 2023-01-31 15:03:26
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
    换句话说，s1 的排列之一是 s2 的 子串 。

    示例 1：
    输入：s1 = "ab" s2 = "eidbaooo"
    输出：true
    解释：s2 包含 s1 的排列之一 ("ba").
 */
var checkInclusion = function (s1, s2) {
	var need = {},
		window = {}
	var left = 0,
		right = 0,
		valid = 0

	for (let i = 0; i < s1.length; i++) {
		need[s1[i]] = need[s1[i]] + 1 || 1
		window[s1[i]] = 0
	}

	while (right < s2.length) {
		var c = s2[right]
		right++

		if (need[c]) {
			window[c]++
			if (window[c] === need[c]) {
				valid++
			}
		}

		while (right - left >= s1.length) {
			if (valid === Object.keys(need).length) {
				return true
			}

			var d = s2[left]
			left++

			if (need[d]) {
				if (window[d] === need[d]) {
					valid--
				}
				window[d]--
			}
		}
	}

	return false
}

checkInclusion('abcdxabcde', 'abcdeabcdx')
// @lc code=end
