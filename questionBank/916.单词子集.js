/*
 * @Author: linzhihai
 * @Date: 2022-11-17 11:57:09
 * @LastEditTime: 2022-11-17 14:35:06
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=916 lang=javascript
 *
 * [916] 单词子集
 */

// @lc code=start
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 * 给你两个字符串数组 words1 和 words2。
    现在，如果 b 中的每个字母都出现在 a 中，包括重复出现的字母，那么称字符串 b 是字符串 a 的 子集 。
    例如，"wrr" 是 "warrior" 的子集，但不是 "world" 的子集。
    如果对 words2 中的每一个单词 b，b 都是 a 的子集，那么我们称 words1 中的单词 a 是 通用单词 。
    以数组形式返回 words1 中所有的通用单词。你可以按 任意顺序 返回答案。
    
    示例 1：
    输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
    输出：["facebook","google","leetcode"]

    示例 2：
    输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
    输出：["apple","google","leetcode"]

    ["amazon","apple","facebook","google","leetcode"]
   ["e","oo"]
 */
var wordSubsets = function (words1, words2) {
	const res = []
	const charCnt = new Array(26).fill(0)

	for (const c of words2) {
		const t = helper(c)

		for (let i = 0; i < 26; i++) {
			charCnt[i] = Math.max(charCnt[i], t[i])
		}
	}

	for (const c of words1) {
		const t = helper(c)
		let i = 0

		for (; i < 26; i++) {
			if (t[i] < charCnt[i]) {
				break
			}
		}

		if (i === 26) {
			res.push(c)
		}
	}

	return res

	function helper(word) {
		const res = new Array(26).fill(0)

		for (const c of word) {
			++res[c.charCodeAt() - 'a'.charCodeAt()]
		}

		return res
	}
}

wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['eo', 'oo'])
// @lc code=end
