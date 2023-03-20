/*
 * @Author: linzhihai
 * @Date: 2022-09-23 17:21:51
 * @LastEditTime: 2022-09-23 18:23:57
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

/**
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
    数组中的每个元素代表你在该位置可以跳跃的最大长度。
    判断你是否能够到达最后一个下标。

    示例 1：
    输入：nums = [2,3,1,1,4]
    输出：true
    解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
    示例 2：

    输入：nums = [3,2,1,0,4]
    输出：false
    解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	var reach = 0,
		n = nums.length

	for (let i = 0; i < n; i++) {
		if (i > reach || reach >= n - 1) break

		reach = Math.max(reach, i + nums[i])
	}

	return reach >= n - 1
}

canJump([2, 3, 1, 1, 4])
// @lc code=end
