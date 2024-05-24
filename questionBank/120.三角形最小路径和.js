/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 * 
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
    每一步只能移动到下一行中相邻的结点上。
    相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
    也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 */
var minimumTotal = function (triangle) {
	var m = triangle.length
	var n = triangle[m - 1].length
	var dp = Array(m)
		.fill(false)
		.map((_) => new Array(n).fill(Number.MAX_SAFE_INTEGER))

	dp[0][0] = triangle[0][0]

	for (let i = 1; i < triangle.length; i++) {
		var row = triangle[i]

		for (let j = 0; j < row.length; j++) {
			if (j > 0) {
				dp[i][j] = Math.min(dp[i - 1][j] + row[j], dp[i - 1][j - 1] + row[j])
			} else {
				dp[i][j] = dp[i - 1][j] + row[j]
			}
		}
	}

	return Math.min.apply(null, dp[m - 1])
}

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])
// @lc code=end
