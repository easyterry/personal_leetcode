/*
 * @Author: linzhihai
 * @Date: 2021-08-19 14:25:53
 * @LastEditTime: 2021-08-19 15:17:50
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} 
 * 输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
 */
var search = function (nums, target) {
	if (nums.length === 0) return -1

	var left = 0,
		right = nums.length - 1
        
	while (left <= right) {
		var mid = Math.floor(left + (right - left) / 2)

		if (nums[mid] === target) {
			return mid
		} else if (nums[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return -1
}

search([-1, 0, 3, 5, 9, 12], 9)
// @lc code=end
