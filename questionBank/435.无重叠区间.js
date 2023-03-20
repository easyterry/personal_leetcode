/*
 * @Author: linzhihai
 * @Date: 2022-11-16 11:59:15
 * @LastEditTime: 2022-11-16 14:23:41
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
	if (intervals.length === 0) return 0
	intervals.sort((a, b) => a[1] - b[1])

	var count = 0
	var x_end = intervals[0][1]

	for (let i = 1; i < intervals.length; i++) {
		var start = intervals[i][0]

		if (start >= x_end) {
			x_end = intervals[i][1]
		} else {
			count++
		}
	}

	return count
}

eraseOverlapIntervals([
	[1, 2],
	[2, 3],
	[3, 4],
	[1, 3],
])
// @lc code=end
