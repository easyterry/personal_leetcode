/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 *
 * https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/description/
 *
 * algorithms
 * Medium (42.19%)
 * Likes:    1143
 * Dislikes: 0
 * Total Accepted:    199.2K
 * Total Submissions: 471.9K
 * Testcase Example:  '[2,6,4,8,10,9,15]'
 *
 * 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 * 请你找出符合题意的 最短 子数组，并输出它的长度。
 *
 * 示例 1：
 * 输入：nums = [2,6,4,8,10,9,15]
 * 输出：5
 * 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 *
 * 示例 2：
 * 输入：nums = [1,2,3,4]
 * 输出：0
 *
 * 示例 3：
 * 输入：nums = [1]
 * 输出：0
 *
 * 提示：
 * 1
 * -10^5
 *
 * 进阶：你可以设计一个时间复杂度为 O(n) 的解决方案吗？
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
	const cloneNums = nums.slice(0)

	cloneNums.sort((a, b) => a - b)
	let start = -1
	let end = -1

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== cloneNums[i]) {
			if (start === -1) {
				start = i
			} else {
				end = i
			}
		}
	}

	return start !== -1 ? end - start + 1 : 0
}
// @lc code=end
