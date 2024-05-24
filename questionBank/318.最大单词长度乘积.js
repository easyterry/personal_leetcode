/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 * 
 * 输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
    输出：16 
    解释：这两个单词为 "abcw", "xtfn"。
 */
var maxProduct = function (words) {
	var max = 0
	const len = words.length
	const mask = new Array(len).fill(0)

	for (let i = 0; i < len; i++) {
		const word = words[i]
		const wordLength = word.length
		for (let j = 0; j < wordLength; j++) {
			mask[i] |= 1 << (word[j].charCodeAt() - 'a'.charCodeAt())
		}
	}

	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			if ((mask[i] & mask[j]) === 0) {
				max = Math.max(max, words[i].length * words[j].length)
			}
		}
	}

	return max
}

maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'])
// @lc code=end
