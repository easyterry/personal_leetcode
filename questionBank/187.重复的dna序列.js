/*
 * @Author: linzhihai
 * @Date: 2023-02-01 15:32:27
 * @LastEditTime: 2023-02-01 16:38:13
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 * 
 * 示例 1：
    输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
    输出：["AAAAACCCCC","CCCCCAAAAA"]
 */
var findRepeatedDnaSequences = function (s) {
	var window = {},
		left = 0,
		right = 0
	var res = []

	while (right < s.length) {
		right++

		if (right - left === 10) {
			var str = s.slice(left, right)
			left++

			window[str] = window[str] + 1 || 1

			if (window[str] === 2) {
				res.push(str)
			}
		}
	}

	return res
}

findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')
// @lc code=end
