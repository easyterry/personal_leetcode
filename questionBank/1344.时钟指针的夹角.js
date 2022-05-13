/*
 * @Author: linzhihai
 * @Date: 2021-08-18 15:55:15
 * @LastEditTime: 2022-04-19 11:36:44
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1344 lang=javascript
 *
 * [1344] 时钟指针的夹角
 */

// @lc code=start
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 * 输入：hour = 12, minutes = 30
输出：165
 */
var angleClock = function (hour, minutes) {
	const hourAngle = hour * 30 + minutes / 2
	const minuteAngle = minutes * 6

	return Math.min(Math.abs(hourAngle - minuteAngle), 360 - Math.abs(hourAngle - minuteAngle))
}
// @lc code=end
