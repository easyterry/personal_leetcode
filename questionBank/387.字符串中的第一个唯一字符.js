/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	let map = new Map()

	for (let i = 0; i < s.length; i++) {
		const element = s[i]

		map.set(element, (map.get(element) || 0) + 1)
	}

	const filter = Array.from(map.entries()).filter((item) => item[1] === 1)

	return filter.length ? s.indexOf(filter[0][0]) : -1
}

firstUniqChar('aabb')
// @lc code=end
