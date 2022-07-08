/*
 * @Author: linzhihai
 * @Date: 2021-07-05 15:34:38
 * @LastEditTime: 2022-07-07 14:19:01
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {	// 参考：https://leetcode-cn.com/problems/longest-common-prefix/solution/zui-chang-gong-gong-qian-zhui-by-leetcode/
	if (strs.length === 0) {
		return ''
	}

	var res = strs[0]
	for (var i = 1; i < strs.length; i++) {
		while (strs[i].indexOf(res) !== 0) {
			res = res.substring(0, res.length - 1)
		}
	}

	return res
}

longestCommonPrefix(['flower', 'flow', 'flight'])
// @lc code=end
