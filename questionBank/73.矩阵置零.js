/*
 * @Author: linzhihai
 * @Date: 2022-11-16 15:57:14
 * @LastEditTime: 2022-11-16 16:17:51
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	var row = new Array(matrix.length).fill(false)
	var col = new Array(matrix[0].length).fill(false)

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				row[i] = true
				col[j] = true
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		if (row[i]) {
			for (let j = 0; j < matrix[i].length; j++) {
				matrix[i][j] = 0
			}
		}
	}

	for (let j = 0; j < matrix[0].length; j++) {
		if (col[j]) {
			for (let i = 0; i < matrix.length; i++) {
				matrix[i][j] = 0
			}
		}
	}
}
// @lc code=end
