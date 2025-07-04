/*
 * @Author: linzhihai
 * @Date: 2021-07-05 15:34:38
 * @LastEditTime: 2021-07-05 15:52:47
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (strs.length === 0 || strs === null) return ''

	for (let col = 0; col < strs[0].length; col++) {
		for (let row = 1; row < strs.length; row++) {
			let currentStr = strs[row],
				prevStr = strs[row - 1]

			if (
				col >= currentStr.length ||
				col >= prevStr.length ||
				currentStr[col] !== prevStr[col]
			) {
				return strs[row].substring(0, col)
			}
		}
	}

	return strs[0]
}

longestCommonPrefix(['flower', 'flow', 'flight'])
// @lc code=end
