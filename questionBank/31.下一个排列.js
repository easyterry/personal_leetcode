/*
 * @Author: linzhihai
 * @Date: 2021-07-12 16:20:14
 * @LastEditTime: 2021-08-20 11:54:53
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	var i = nums.length - 2

	while (i >= 0 && nums[i] >= nums[i + 1]) i--

	if (i >= 0) {
		var j = nums.length - 1

		while (j >= 0 && nums[j] <= nums[i]) j--
		swap(i, j, nums)
	}
	reverse(nums, i + 1)
}

var swap = function (i, j, nums) {
	var temp = nums[i]
	nums[i] = nums[j]
	nums[j] = temp
}

function reverse(nums, start) {
	var end = nums.length - 1

	while (start < end) {
		swap(start, end, nums)
		start++
		end--
	}
}

nextPermutation([1, 3, 6, 8, 8, 9, 8, 2])
// @lc code=end
