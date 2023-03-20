/*
 * @Author: linzhihai
 * @Date: 2022-09-14 16:57:22
 * @LastEditTime: 2022-09-14 17:15:18
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
	intervals.sort((a, b) => {
		if (a[0] === b[0]) {
			return b[1] - a[1]
		}
		return a[0] - b[0]
	})

	var left = intervals[0][0],
		right = intervals[0][1]
	var res = 0

	for (let i = 1; i < intervals.length; i++) {
		var intv = intervals[i]
		// 覆盖区间
		if (left <= intv[0] && right >= intv[1]) {
			res++
		}
		// 相交区间
		if (right >= intv[0] && right <= intv[1]) {
			right = intv[1]
		}
		// 完全不相交
		if (right < intv[0]) {
			left = intv[0]
			right = intv[1]
		}
	}

	return intervals.length - res
}
removeCoveredIntervals([
	[1, 4],
	[2, 8],
	[3, 6],
])
// @lc code=end
