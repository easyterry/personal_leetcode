/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	citations.sort((a, b) => a - b)
	let n = 1

	for (let i = citations.length - 1; i >= 0; i--) {
		const element = citations[i]

		if (n > element) {
			break
		}

		n++
	}

	return n - 1
}
// @lc code=end
