/*
 * @Author: linzhihai
 * @Date: 2022-09-28 10:35:34
 * @LastEditTime: 2022-09-28 14:26:49
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

/**
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
    注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

    示例 1：
    输入: s = "leetcode", wordDict = ["leet", "code"]
    输出: true
    解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	var n = s.length
	var dp = new Array(n + 1).fill(false)
	var wordDictSet = new Set(wordDict)

	dp[0] = true

	for (let i = 1; i <= n; i++) {
		for (let j = 0; j < i; j++) {
			if (dp[j] && wordDictSet.has(s.substring(j, i))) {
				dp[i] = true
				break
			}
		}
	}
	return dp[n]
}

wordBreak('leetcode', ['leet', 'code'])
// @lc code=end
