/*
 * @Author: linzhihai
 * @Date: 2022-09-14 15:05:53
 * @LastEditTime: 2022-09-14 17:53:19
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

示例 1：
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	if (intervals.length === 0) {
		return []
	}
	intervals.sort((a, b) => {
		return a[0] - b[0]
	})

	var res = []
	res.push(intervals[0])

	for (let i = 1; i < intervals.length; i++) {
		var curr = intervals[i]
		var last = res[res.length - 1]

		if (curr[0] <= last[1]) {
			last[1] = Math.max(curr[1], last[1])
		} else {
			res.push(curr)
		}
	}

	return res
}

merge([
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
])
// @lc code=end
