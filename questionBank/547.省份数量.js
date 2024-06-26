/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 * 
 * 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
    省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
    给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。
    返回矩阵中 省份 的数量。

    输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
    输出：2

    输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
    输出：3
 */
var findCircleNum = function (isConnected) {
	var connect = new Array(isConnected.length).fill(false)
	var res = 0

	for (let i = 0; i < isConnected.length; i++) {
		if (connect[i]) continue

		helper(i)
		res++
	}

	return res

	function helper(k) {
		connect[k] = true
		for (let j = 0; j < isConnected.length; j++) {
			if (!isConnected[k][j] || connect[j]) continue

			helper(j)
		}
	}
}

findCircleNum([
	[1, 1, 0],
	[1, 1, 0],
	[0, 0, 1],
])
// @lc code=end
