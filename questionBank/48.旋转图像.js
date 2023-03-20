/*
 * @Author: linzhihai
 * @Date: 2022-08-23 18:00:57
 * @LastEditTime: 2022-08-24 10:24:33
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	var n = matrix[0].length
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
		}
	}

	for (const row of matrix) {
		reverse(row)
	}

	function reverse(arr) {
		var left = 0,
			right = arr.length - 1

		while (left < right) {
			var temp = arr[left]
			arr[left] = arr[right]
			arr[right] = temp
			left++
			right--
		}
	}
}

rotate([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
])
// @lc code=end
