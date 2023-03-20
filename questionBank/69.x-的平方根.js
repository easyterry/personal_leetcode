/*
 * @Author: linzhihai
 * @Date: 2022-08-19 16:31:15
 * @LastEditTime: 2022-08-25 19:40:36
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	var left = 0,
		right = x

	while (left <= right) {
		var mid = Math.floor(left + (right - left) / 2)

		if (mid * mid <= x) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return left - 1
}
// @lc code=end
