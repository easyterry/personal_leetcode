/*
 * @Author: linzhihai
 * @Date: 2023-02-02 16:37:46
 * @LastEditTime: 2023-02-02 17:23:26
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
	var arr = s.split(' ')
	var map1 = new Map()
	var map2 = new Map()

	if (pattern.length !== arr.length) {
		return false
	}

	for (let i = 0; i < pattern.length; i++) {
		var p = pattern[i]

		if (!map1.get(p)) {
			map1.set(p, arr[i])
		} else if (map1.get(p) !== arr[i]) {
			return false
		}

		if (!map2.get(arr[i])) {
			map2.set(arr[i], p)
		} else if (map2.get(arr[i]) !== p) {
			return false
		}
	}

	return true
}

wordPattern('abba', 'dog constructor constructor dog')
// @lc code=end
