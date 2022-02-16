/*
 * @Author: linzhihai
 * @Date: 2021-08-10 16:46:53
 * @LastEditTime: 2021-08-10 17:21:11
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
var lengthOfLongestSubstring = function (s) {
	var str = ''
	var maxlength = 0

	for (let i = 0; i < s.length; i++) {
		var findIndex = str.indexOf(s[i])
        
		if (findIndex === -1) {
			str += s[i]
		} else {
			str = str.substring(findIndex + 1)
		}

		if (str.length > maxlength) {
			maxlength = str.length
		}
	}

	return maxlength
}

lengthOfLongestSubstring('abcabcbb')
// @lc code=end
