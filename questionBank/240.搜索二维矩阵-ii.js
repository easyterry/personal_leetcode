/*
 * @Author: linzhihai
 * @Date: 2023-02-06 11:34:04
 * @LastEditTime: 2023-02-06 15:17:58
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 
 * 示例1：
 * 输入：matrix = 
 * [
 * [1,4,7,11,15],
 * [2,5,8,12,19],
 * [3,6,9,16,22],
 * [10,13,14,17,24],
 * [18,21,23,26,30]
 * ], target = 5
    输出：true
 */
var searchMatrix = function (matrix, target) {
	var i = matrix.length - 1,
		j = 0

	while (i >= 0 && j < matrix[0].length) {
		if (matrix[i][j] > target) {
			i--
		} else if (matrix[i][j] < target) {
			j++
		} else {
			return true
		}
	}

	return false
}

searchMatrix([[-5]], -10)
// @lc code=end
