/*
 * @Author: linzhihai
 * @Date: 2022-06-15 17:00:29
 * @LastEditTime: 2022-06-21 16:54:35
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @description 输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。
示例 2：

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	let len1 = text1.length
	let len2 = text2.length
	let dp = new Array(len1 + 1).fill(null).map((i) => new Array(len2 + 1).fill(0))

	for (let i = 1; i <= len1; i++) {
		for (let j = 1; j <= len2; j++) {
			if (text2[j - 1] === text1[i - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
			}
		}
	}

	return dp[len1][len2]
}

console.log(longestCommonSubsequence('abcde', 'acde'))
// @lc code=end
