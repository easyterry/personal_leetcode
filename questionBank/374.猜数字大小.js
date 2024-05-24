/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
	var left = 1,
		right = n

	while (left < right) {
		var mid = Math.floor(left + (right - left) / 2)

		if (guess(mid) === -1) {
			right = mid
		} else if (guess(mid) === 1) {
			left = mid + 1
		} else {
			right = mid
		}
	}

	return left
}
// @lc code=end
