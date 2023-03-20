/*
 * @Author: linzhihai
 * @Date: 2022-09-16 17:28:24
 * @LastEditTime: 2022-09-16 18:26:43
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
 * 输入：nums = [1,2,3,1]
    输出：4
    解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
    偷窃到的最高金额 = 1 + 3 = 4 。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	var m = nums.length

	if (m === 1) {
		return nums[0]
	}

	var res = Math.max(robRange(nums, 0, m - 2), robRange(nums, 1, m - 1))

	return res

	function robRange(nums, start, end) {
		var n = nums.length
		var dp = new Array(n + 2).fill(0)

		for (let i = end; i >= start; i--) {
			dp[i] = Math.max(dp[i + 1], dp[i + 2] + nums[i])
		}

		return dp[start]
	}
}

rob([1, 2, 3])
// @lc code=end
