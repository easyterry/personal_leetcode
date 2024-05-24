/*
 * @Author: linzhihai
 * @Date: 2022-08-19 15:04:23
 * @LastEditTime: 2023-02-14 11:48:07
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
 */
var exist = function (board, word) {
	var str = ''

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (backtrack(board, i, j, str, 0)) {
				return true
			}
		}
	}

	return false

	function backtrack(board, m, n, str, d) {
		if (
			m > board.length - 1 ||
			n > board[0].length - 1 ||
			n < 0 ||
			m < 0 ||
			board[m][n] !== word[d]
		) {
			return false
		}

		if (str + board[m][n] === word) return true

		str += board[m][n]
		var cur = board[m][n]
		board[m][n] = 0
		var found =
			backtrack(board, m + 1, n, str, d + 1) ||
			backtrack(board, m, n + 1, str, d + 1) ||
			backtrack(board, m - 1, n, str, d + 1) ||
			backtrack(board, m, n - 1, str, d + 1)
		board[m][n] = cur
		return found
	}
}

exist(
	[
		['A', 'B', 'C', 'E'],
		['S', 'F', 'C', 'S'],
		['A', 'D', 'E', 'E'],
	],
	'ABCCED'
)
// @lc code=end
