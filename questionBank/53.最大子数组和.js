/*
 * @Author: linzhihai
 * @Date: 2022-06-21 16:55:39
 * @LastEditTime: 2022-09-05 15:07:38
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @description
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */
var maxSubArray = function (nums) {
	// var curr = nums[0];
	// var res = nums[0];

	// for (let i = 1; i < nums.length; i++) {
	//   curr += nums[i];

	//   if (curr < 0 || nums[i] > curr) {
	//     curr = nums[i];
	//   }

	//   if (res < curr) {
	//     res = curr;
	//   }
	// }

	// return res;

	var m = nums.length
	var dp = new Array(m).fill(0)

	dp[0] = nums[0]
	for (let i = 1; i < m; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
	}

	return Math.max.apply(null, dp)
}
// @lc code=end
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
