/*
 * @lc app=leetcode.cn id=390 lang=javascript
 *
 * [390] 消除游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 输入：n = 9
    输出：6
    解释：
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    arr = [2, 4, 6, 8]
    arr = [2, 6]
    arr = [6]
 */
var lastRemaining = function (n) {
	var left2Right = true,
		step = 1,
		res = 1

	while (n > 1) {
		if (left2Right || n % 2 === 1) res += step

		n = Math.floor(n / 2)
		step *= 2
		left2Right = !left2Right
	}

	return res
}

lastRemaining(6)
// @lc code=end
