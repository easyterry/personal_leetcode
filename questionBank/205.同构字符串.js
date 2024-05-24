/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

示例 1:
输入：s = "egg", t = "add"
输出：true

示例 2：
输入：s = "foo", t = "bar"
输出：false

示例 3：
输入：s = "paper", t = "title"
输出：true
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	if (s.length !== t.length) return false

	let map1 = new Map()
	let map2 = new Map()

	for (let i = 0; i < s.length; i++) {
		const element1 = s[i]
		const element2 = t[i]

		if (map1.get(element1) !== map2.get(element2)) {
			return false
		} else {
			if (!map1.get(element1)) {
				map1.set(element1, i + 1)
				map2.set(element2, i + 1)
			}
		}
	}

	return true
}

isIsomorphic('aaabbbba', 'bbbaaaba')
// @lc code=end
