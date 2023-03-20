/*
 * @Author: linzhihai
 * @Date: 2023-01-05 17:13:48
 * @LastEditTime: 2023-01-31 18:16:53
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
    1).每行中的整数从左到右按升序排列。
    2).每行的第一个整数大于前一行的最后一个整数。

    输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    输出：true
 */
var searchMatrix = function (matrix, target) {
	var left = 0,
		right = matrix.length

	while (left < right) {
		var mid = Math.floor(left + (right - left) / 2)

		if (matrix[mid][0] === target) return true

		if (matrix[mid][0] < target) {
			left = mid + 1
		} else {
			right = mid
		}
	}

	var tmp = right > 0 ? right - 1 : right

	left = 0
	right = matrix[0].length

	while (left < right) {
		var mid = Math.floor(left + (right - left) / 2)

		if (matrix[tmp][mid] === target) {
			return true
		}
		if (matrix[tmp][mid] < target) {
			left = mid + 1
		} else {
			right = mid
		}
	}

	return false
}
// @lc code=end
