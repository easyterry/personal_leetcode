/*
 * @Author: linzhihai
 * @Date: 2021-08-17 10:13:53
 * @LastEditTime: 2021-08-17 14:24:44
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 */
var spiralOrder = function (matrix) {
	var res = []
	var left = 0
	var right = matrix[0].length - 1
	var bottom = matrix.length - 1
	var top = 0

	while (true) {
		for (let i = left; i <= right; i++) {
			res.push(matrix[top][i])
		}
		top++
		if (top > bottom) break

		for (let i = top; i <= bottom; i++) {
			res.push(matrix[i][right])
		}
		right--
		if (left > right) break

		for (let i = right; i >= left; i--) {
			res.push(matrix[bottom][i])
		}
		bottom--
		if (top > bottom) break

		for (let i = bottom; i >= top; i--) {
			res.push(matrix[i][left])
		}
		left++
		if (left > right) break
	}

	return res
}

spiralOrder([
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
])
// @lc code=end
