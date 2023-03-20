/*
 * @Author: linzhihai
 * @Date: 2021-08-19 15:47:58
 * @LastEditTime: 2022-08-23 12:01:06
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
 */
var moveZeroes = function (nums) {
	var slow = 0,
		fast = 0

	while (fast < nums.length) {
		if (nums[fast] !== 0) {
			;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
			slow++
		}

		fast++
	}
}

moveZeroes([0, 1, 0, 3, 12])
// @lc code=end
