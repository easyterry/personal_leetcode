/*
 * @Author: linzhihai
 * @Date: 2022-02-16 18:52:48
 * @LastEditTime: 2022-08-25 10:47:15
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
 */
var searchInsert = function (nums, target) {
	var left = 0,
		right = nums.length

	while (left < right) {
		var mid = Math.floor(left + (right - left) / 2)

		if (nums[mid] === target) {
			right = mid
		} else if (nums[mid] > target) {
			right = mid
		} else if (nums[mid] < target) {
			left = mid + 1
		}
	}
    return left
}
// @lc code=end
