/*
 * @Author: linzhihai
 * @Date: 2021-08-09 11:23:45
 * @LastEditTime: 2021-08-09 11:46:48
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
	var l = nums.length
	var stack = []
	var res = []

	for (let i = l * 2 - 1; i >= 0; i--) {
		while (stack.length && stack[stack.length - 1] <= nums[i % l]) {
			stack.pop()
		}

		res[i % l] = stack.length ? stack[stack.length - 1] : -1
		stack.push(nums[i % l])
	}

	return res
}

nextGreaterElements([1, 2, 1])
// @lc code=end
