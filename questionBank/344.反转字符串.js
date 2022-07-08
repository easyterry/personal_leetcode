/*
 * @Author: linzhihai
 * @Date: 2022-04-19 14:41:44
 * @LastEditTime: 2022-06-23 17:59:28
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	var left = 0
	var right = s.length - 1

	while (left < right) {
		var temp = s[left]
		s[left] = s[right]
		s[right] = temp

		left++
		right--
	}
	return s
}
// @lc code=end
