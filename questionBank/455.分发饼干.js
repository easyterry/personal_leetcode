/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
	var result = 0
	g.sort((a, b) => a - b)
	s.sort((a, b) => a - b)

	var index = s.length - 1

	for (let i = g.length - 1; i >= 0; i--) {
		if (s[index] >= g[i]) {
			result++
			index--
		}
	}

	return result
}
// @lc code=end
