/*
 * @Author: linzhihai
 * @Date: 2022-08-23 17:48:06
 * @LastEditTime: 2022-08-25 16:24:30
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 * 输入：s = "the sky is blue"
输出："blue is sky the"
示例 2：

输入：s = "  hello world  "
输出："world hello"
解释：颠倒后的字符串中不能存在前导空格和尾随空格。
 */
var reverseWords = function (s) {
	return s.trim().split(/\s+/).reverse().join(" ")
}

reverseWords('the sky is blue')
// @lc code=end
