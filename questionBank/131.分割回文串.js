/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 * 
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
    回文串 是正着读和反着读都一样的字符串。

    示例 1：
    输入：s = "aab"
    输出：[["a","a","b"],["aa","b"]]

    示例 2：
    输入：s = "a"
    输出：[["a"]]
    
    提示：
    1 <= s.length <= 16
    s 仅由小写英文字母组成
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
	const res = []
	backtrack([], 0)

	return res

	function backtrack(path, start) {
		if (start === s.length) {
			res.push([...path])
			return
		}

		for (let i = start; i < s.length; i++) {
			if (isPalindrome(s, start, i)) {
				path.push(s.slice(start, i + 1))
				backtrack(path, i + 1)
				path.pop()
			}
		}
	}

	function isPalindrome(s, low, high) {
		while (low < high) {
			if (s[low] !== s[high]) {
				return false
			}

			low++
			high--
		}

		return true
	}
}
// @lc code=end
