/*
 * @Author: linzhihai
 * @Date: 2021-08-02 18:07:40
 * @LastEditTime: 2021-08-02 18:22:14
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * [1,8,6,2,5,4,8,3,7] -> 49
 */
var maxArea = function (height) {
	var left = 0
	var right = height.length - 1

	var res = 0

	while (left < right) {
		res = Math.max(res, Math.min(height[left], height[right]) * (right - left))

		if (height[left] < height[right]) {
			left++
		} else {
			right--
		}
	}

	return res
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
// @lc code=end
