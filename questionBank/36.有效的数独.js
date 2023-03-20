/*
 * @Author: linzhihai
 * @Date: 2022-09-13 15:50:55
 * @LastEditTime: 2022-12-12 19:17:23
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	var row = new Array(9).fill(0).map((item) => new Array(10).fill(0))
	var col = new Array(9).fill(0).map((item) => new Array(10).fill(0))
	var box = new Array(9).fill(0).map((item) => new Array(10).fill(0))

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === '.') continue
			var current = board[i][j] - '0'
			if (row[i][current] === 1) return false
			if (col[j][current] === 1) return false
			if (box[Math.floor(j / 3) + Math.floor(i / 3) * 3][current] === 1) return false
			row[i][current] = 1
			col[j][current] = 1
			box[Math.floor(j / 3) + Math.floor(i / 3) * 3][current] = 1
		}
	}

	return true
}
// @lc code=end
