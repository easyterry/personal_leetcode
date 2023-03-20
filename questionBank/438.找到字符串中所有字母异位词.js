/*
 * @Author: linzhihai
 * @Date: 2023-01-31 16:59:42
 * @LastEditTime: 2023-01-31 17:15:39
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	var need = {},
		window = {}
	var left = 0,
		right = 0,
		valid = 0
	var res = []

	for (let i = 0; i < p.length; i++) {
		need[p[i]] = need[p[i]] + 1 || 1
		window[p[i]] = 0
	}

	while (right < s.length) {
		var r = s[right]
		right++

		if (need[r]) {
			window[r]++
			if (window[r] === need[r]) {
				valid++
			}
		}

		while (right - left >= p.length) {
			if (valid === Object.keys(need).length) {
				res.push(left)
			}

			var l = s[left]
			left++

			if (need[l]) {
				if (need[l] === window[l]) {
					valid--
				}
				window[l]--
			}
		}
	}

	return res
}
// @lc code=end
