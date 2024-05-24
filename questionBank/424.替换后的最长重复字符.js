/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 
 * 输入：s = "ABAB", k = 2
    输出：4
    解释：用两个'A'替换为两个'B',反之亦然。
 */
var characterReplacement = function (s, k) {
	var res = 0,
		maxCount = 0,
		start = 0,
		counts = new Array(26).fill(0)

	for (let i = 0; i < s.length; i++) {
		maxCount = Math.max(maxCount, ++counts[s[i].charCodeAt() - 'A'.charCodeAt()])
		
		while (i - start + 1 - maxCount > k) {
			--counts[s[start].charCodeAt() - 'A'.charCodeAt()]
			++start
		}
		res = Math.max(res, i - start + 1)
	}

	return res
}

characterReplacement("ABAB", 2)
// @lc code=end
