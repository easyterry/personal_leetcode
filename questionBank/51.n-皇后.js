/*
 * @Author: linzhihai
 * @Date: 2021-07-21 16:42:01
 * @LastEditTime: 2021-07-22 17:13:32
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
	var list = []

	for (let i = 0; i < n; i++) {
		list[i] = []
		for (let j = 0; j < n; j++) {
			list[i][j] = 0
		}
	}

	console.log(list)
}
// @lc code=end
