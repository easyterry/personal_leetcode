/*
 * @Author: linzhihai
 * @Date: 2021-08-19 15:47:58
 * @LastEditTime: 2021-08-19 16:00:30
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
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) continue

		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] !== 0) {
				var temp = nums[i]
				nums[i] = nums[j]
				nums[j] = temp
				break
			}
		}
	}

	return nums
}

moveZeroes([0, 1, 0, 3, 12])
// @lc code=end
