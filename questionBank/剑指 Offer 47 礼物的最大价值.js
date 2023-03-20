/*
 * @Author: linzhihai
 * @Date: 2022-08-30 10:29:20
 * @LastEditTime: 2022-08-30 10:53:51
 * @Description:
 */

/**
 * 
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
示例 1:
输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof
 */

var maxValue = function (grid) {
	var m = grid.length,
		n = grid[0].length

	var dp = Array.from({ length: m }, () => new Array(n).fill(0))

	for (let i = 0; i < m; i++) {
		if (i === 0) {
			dp[i][0] = grid[i][0]
		} else {
			dp[i][0] = grid[i][0] + dp[i - 1][0]
		}
	}

	for (let j = 0; j < n; j++) {
		if (j === 0) {
			dp[0][j] = grid[0][j]
		} else {
			dp[0][j] = grid[0][j] + dp[0][j - 1]
		}
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]) + grid[i][j]
		}
	}

	return dp[m - 1][n - 1]
}

maxValue([
	[1, 2, 5],
	[3, 2, 1],
])
