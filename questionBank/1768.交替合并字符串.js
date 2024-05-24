/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	var start = 0
	var len1 = word1.length,
		len2 = word2.length
	var res = ''

	while (start < len1 && start < len2) {
		res += word1[start] + word2[start]
		start++
	}

	if (start >= len1) {
		res += word2.slice(start)
	} else {
		res += word1.slice(start)
	}

	return res
}

mergeAlternately('ab', 'pqrs')
// @lc code=end
