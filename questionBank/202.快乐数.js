/*
 * @Author: linzhihai
 * @Date: 2022-07-07 15:15:58
 * @LastEditTime: 2022-08-25 14:48:24
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	var slow = n
	var fast = n

	do {
		slow = getNext(slow)
		fast = getNext(getNext(fast))
	} while (slow !== fast)

	return slow === 1

	function getNext(num) {
		var res = 0

		while (num > 0) {
			var t = num % 10
			res += t * t
			num = Math.floor(num / 10)
		}

		return res
	}
}
isHappy(19)
// @lc code=end
