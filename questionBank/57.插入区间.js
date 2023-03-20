/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
    在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

    示例 1：
    输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
    输出：[[1,5],[6,9]]

    示例 2：
    输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
    输出：[[1,2],[3,10],[12,16]]
    解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

    示例 3：
    输入：intervals = [], newInterval = [5,7]
    输出：[[5,7]]
 */
var insert = function (intervals, newInterval) {
	var result = []
	var index = 0

	while (index < intervals.length && intervals[index][1] < newInterval[0]) {
		result.push(intervals[index++])
	}

	while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
		newInterval[0] = Math.min(intervals[index][0], newInterval[0])
		newInterval[1] = Math.max(intervals[index][1], newInterval[1])
		index++
	}

	result.push(newInterval)

	while (index < intervals.length) {
		result.push(intervals[index++])
	}

	return result
}

insert(
	[
		[1, 3],
		[6, 9],
	],
	[2, 5]
)
// @lc code=end
