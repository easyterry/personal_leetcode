/*
 * @Author: linzhihai
 * @Date: 2022-08-25 11:05:53
 * @LastEditTime: 2022-08-25 11:42:32
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
 */
var search = function (nums, target) {
	var left = 0,
		right = nums.length - 1

	while (left <= right) {
		var mid = Math.floor(left + (right - left) / 2)

		if (nums[mid] === target) {
			return mid
		}
		if (nums[mid] < nums[right]) {
			if (nums[mid] < target && nums[right] >= target) {
				left = mid + 1
			} else {
				right = mid - 1
			}
		} else {
			if (nums[mid] > target && nums[left] <= target) {
				right = mid - 1
			} else {
				left = mid + 1
			}
		}
	}

	return -1
}
search([4, 5, 6, 7, 0, 1, 2], 0)
// @lc code=end
