/*
 * @Author: linzhihai
 * @Date: 2021-07-05 15:56:11
 * @LastEditTime: 2021-07-12 15:40:57
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	var s = ''
	var ans = []
	if (n > 0) dfs(n, n, s, ans)
	return ans

	function dfs(l, r, s, ans) {
		if (l + r === 0) {
			return ans.push(s)
		}

		if (r < l) {
			return
		}

		if (l > 0) {
			dfs(l - 1, r, s + '(', ans)
		}

		if (r > 0) {
			dfs(l, r - 1, s + ')', ans)
		}
	}
}

console.log(generateParenthesis(3))
// @lc code=end
