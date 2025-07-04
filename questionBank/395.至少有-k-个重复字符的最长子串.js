/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有 K 个重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/description/
 *
 * algorithms
 * Medium (52.59%)
 * Likes:    905
 * Dislikes: 0
 * Total Accepted:    96.2K
 * Total Submissions: 182.8K
 * Testcase Example:  '"aaabb"\n3'
 *
 * 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。
 *
 * 如果不存在这样的子字符串，则返回 0。
 *
 * 示例 1：
 * 输入：s = "aaabb", k = 3
 * 输出：3
 * 解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。
 *
 * 示例 2：
 * 输入：s = "ababbc", k = 2
 * 输出：5
 * 解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
 *
 * 提示：
 * 1 <= s.length <= 10^4
 * s 仅由小写英文字母组成
 * 1 <= k <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
	const longestSubstringHelper = (start, end) => {
		if (end - start < k) return 0

		const count = Array(26).fill(0)

		for (let i = start; i < end; i++) {
			const element = s[i]

			count[element.charCodeAt(0) - 'a'.charCodeAt(0)]++
		}

		for (let i = start; i < end; i++) {
			if (count[s.charCodeAt(i) - 'a'.charCodeAt(0)] < k) {
				let j = i + 1

				while (j < end && count[s.charCodeAt(j) - 'a'.charCodeAt(0)] < k) {
					j++
				}

				return Math.max(longestSubstringHelper(start, i), longestSubstringHelper(j, end))
			}
		}

		return end - start
	}

	return longestSubstringHelper(0, s.length)
}

longestSubstring('ababbc', 2)
// @lc code=end
