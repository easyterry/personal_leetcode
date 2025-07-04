/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
	const m = board.length
	const n = board[0].length

	for (let i = 0; i < m; i++) {
		dfs(board, i, 0)
		dfs(board, i, n - 1)
	}

	for (let j = 0; j < n; j++) {
		dfs(board, 0, j)
		dfs(board, m - 1, j)
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === 'O') {
				board[i][j] = 'X'
			} else if (board[i][j] === 'T') {
				board[i][j] = 'O'
			}
		}
	}
}

function dfs(board, i, j) {
	if (!checkIsValid(board, i, j)) {
		return
	}

	if (board[i][j] !== 'O') return

	board[i][j] = 'T'

	dfs(board, i - 1, j)
	dfs(board, i + 1, j)
	dfs(board, i, j - 1)
	dfs(board, i, j + 1)
}

function checkIsValid(board, i, j) {
	if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
		return false
	}

	return true
}
// @lc code=end
