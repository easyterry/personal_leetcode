/*
 * @Author: linzhihai
 * @Date: 2022-08-26 15:55:05
 * @LastEditTime: 2022-08-26 16:17:55
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	var arr = new Array(n).fill(0).map((_) => new Array(n).fill(0))
	var num = 1
	var left = 0,
		right = n - 1,
		bottom = n - 1,
		top = 0

	while (true) {
		for (let i = left; i <= right; i++) {
			arr[top][i] = num++
		}
		top++
		if (top > bottom) break

		for (let i = top; i <= bottom; i++) {
			arr[i][right] = num++
		}
		right--
		if (right < 0) break

		for (let i = right; i >= left; i--) {
			arr[bottom][i] = num++
		}
		bottom--
		if (bottom < 0) break

		for (let i = bottom; i >= top; i--) {
			arr[i][left] = num++
		}
		left++
		if (left > right) break
	}

	return arr
}
generateMatrix(3)
// @lc code=end
