/*
 * @Author: linzhihai
 * @Date: 2022-11-17 15:00:50
 * @LastEditTime: 2022-11-17 15:55:47
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
	var five = 0
	var ten = 0

	for (let bill of bills) {
		if (bill === 5) {
			++five
		} else if (bill === 10) {
			--five
			++ten
		} else if (ten > 0) {
			--ten
			--five
		} else {
			five -= 3
		}

		if (five < 0) {
			return false
		}
	}

	return true
}

lemonadeChange([5, 5, 10, 10, 20])
// @lc code=end
