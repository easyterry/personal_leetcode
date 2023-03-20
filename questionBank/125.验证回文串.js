/*
 * @Author: linzhihai
 * @Date: 2022-08-24 11:31:44
 * @LastEditTime: 2022-08-24 11:43:49
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	var left = 0,
		right = s.length - 1

	s = s.toLowerCase()

	while (left < right) {
		if ((s[left] < 'a' || s[left] > 'z') && (s[left] < '0' || s[left] > '9')) {
			left++
			continue
		}
		if ((s[right] < 'a' || s[right] > 'z') && (s[right] < '0' || s[right] > '9')) {
			right--
			continue
		}

		if (s[left] !== s[right]) {
			return false
		}
		left++
		right--
	}
	return true
}
// @lc code=end
