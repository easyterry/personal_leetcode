/*
 * @Author: linzhihai
 * @Date: 2021-07-21 16:42:01
 * @LastEditTime: 2022-09-20 18:12:36
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

/**
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
	n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
	给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
	每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
	var grid = Array.from({ length: n }, () => new Array(n).fill('.'))
	var res = []

	backtrack(grid, 0)

	return res

	function backtrack(grid, depth) {
		if (depth === n) {
			res.push(transformArr(grid))
			return
		}

		for (let j = 0; j < n; j++) {
			if (!isValid(grid, depth, j)) {
				continue
			}

			grid[depth][j] = 'Q'
			backtrack(grid, depth + 1)
			grid[depth][j] = '.'
		}
	}

	function isValid(grid, i, j) {
		for (let r = 0; r <= i; r++) {
			if (grid[r][j] === 'Q') {
				return false
			}
		}

		for (let r = i - 1, c = j + 1; r >= 0 && c < n; r--, c++) {
			if (grid[r][c] === 'Q') {
				return false
			}
		}

		for (let r = i - 1, c = j - 1; r >= 0 && c >= 0; r--, c--) {
			if (grid[r][c] === 'Q') {
				return false
			}
		}

		return true
	}

	function transformArr(chessBoard) {
		let chessBoardBack = []
		chessBoard.forEach((row) => {
			let rowStr = ''
			row.forEach((value) => {
				rowStr += value
			})
			chessBoardBack.push(rowStr)
		})

		return chessBoardBack
	}
}

solveNQueens(4)
// @lc code=end
