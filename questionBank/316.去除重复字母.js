/*
 * @Author: linzhihai
 * @Date: 2022-02-28 15:31:41
 * @LastEditTime: 2022-02-28 17:03:14
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 * 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
示例 1：

输入：s = "bcabc"
输出："abc"
示例 2：

输入：s = "cbacdcbc"
输出："acdb"
 */
var removeDuplicateLetters = function (s) {
	let map = new Map()
	let chars = s.split('')
	let ans = []

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

	while (stack.length !== 0) ans.push(stack.pop())

	return ans.reverse().join('')
}

removeDuplicateLetters('cbacdcbc')
// @lc code=end
