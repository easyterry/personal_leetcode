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

	let commonPrefix = ''

	for (let i = 1; i < strs.length; i++) {
		let j = 0
		for (; j < strs[0].length; j++) {
			if (strs[0][j] !== strs[i][j]) {
				break
			}
		}
		commonPrefix = strs[0].slice(0, j)
	}

	return commonPrefix
}
// @lc code=end
