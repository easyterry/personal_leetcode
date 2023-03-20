/*
 * @Author: linzhihai
 * @Date: 2023-02-03 10:28:36
 * @LastEditTime: 2023-02-03 10:35:06
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
	if (word.toLocaleUpperCase() === word || word.toLocaleLowerCase() === word) return true

	if (
		word.charAt(0).toLocaleUpperCase() + word.slice(1, word.length).toLocaleLowerCase() ===
		word
	)
		return true

	return false
}
// @lc code=end
