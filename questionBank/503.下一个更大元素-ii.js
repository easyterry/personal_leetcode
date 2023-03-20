/*
 * @Author: linzhihai
 * @Date: 2021-08-09 11:23:45
 * @LastEditTime: 2022-09-09 16:04:10
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * 输入: [1,2,1]
输出: [2,-1,2]
 */
var nextGreaterElements = function (nums) {
	var n = nums.length
	var res = []
	var stack = []

	for (let i = nums.length * 2 - 1; i >= 0; i--) {
		while (stack.length && stack[stack.length - 1] <= nums[i % n]) {
			stack.pop()
		}

		res[i % n] = stack.length ? stack[stack.length - 1] : -1
		stack.push(nums[i % n])
	}

	return res
}

nextGreaterElements([1, 2, 1])
// @lc code=end
