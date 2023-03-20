/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	if (nums.length === 1) return 0

	var currentDistance = 0,
		nextDistance = 0
	var res = 0

	for (let i = 0; i < nums.length; i++) {
		nextDistance = Math.max(i + nums[i], nextDistance)

		if (i === currentDistance) {
			if (currentDistance < nums.length - 1) {
				res++

				currentDistance = nextDistance
				if (nextDistance >= nums.length - 1) break
			} else {
				break
			}
		}
	}

	return res
}
// @lc code=end
