/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	var map = new Map()

	for (let i = 0; i < ransomNote.length; i++) {
		const element = ransomNote[i]

		map.set(element, (map.get(element) || 0) + 1)
	}

	for (let i = 0; i < magazine.length; i++) {
		const element = magazine[i]

		if (map.get(element)) {
			map.set(element, map.get(element) - 1)
		}
	}

	return !Array.from(map).some((item) => item[1] > 0)
}
// @lc code=end
