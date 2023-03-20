/*
 * @Author: linzhihai
 * @Date: 2021-08-13 15:31:38
 * @LastEditTime: 2022-12-12 17:36:50
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */
var twoSum = function (nums, target) {
	// 1、时间复杂度O(N^2)
	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = i + 1; j < nums.length; j++) {
	// 		if (nums[i] + nums[j] === target) return [i, j]
	// 	}
	// }

	// 空间换时间，时间复杂度O(N)
	// var numMap = new Map()

	// for (let i = 0; i < nums.length; i++) {
	// 	if (numMap.get(nums[i]) !== undefined) {
	// 		return [numMap.get(nums[i]), i]
	// 	}

	// 	numMap.set(target - nums[i], i)
	// }
}

twoSum([2, 7, 11, 15], 9)
// @lc code=end
