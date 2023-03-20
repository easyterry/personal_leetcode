/*
 * @Author: linzhihai
 * @Date: 2022-11-17 10:33:21
 * @LastEditTime: 2022-11-17 10:33:43
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
	let map = new Map()
	let chars = s.split('')

	for (let i = 0; i < chars.length; i++) {
		map.set(chars[i], i)
	}

	let stack = []
	let used = new Map()

	for (let i = 0; i < chars.length; i++) {
		if (used.has(chars[i]) && used.get(chars[i])) continue

		while (
			stack.length !== 0 &&
			chars[i] < stack[stack.length - 1] &&
			map.get(stack[stack.length - 1]) > i
		) {
			used.set(stack.pop(), false)
		}

		stack.push(chars[i])
		used.set(chars[i], true)
	}

	return stack.join('')
}
// @lc code=end
