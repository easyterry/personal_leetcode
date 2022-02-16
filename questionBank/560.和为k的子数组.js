/*
 * @Author: linzhihai
 * @Date: 2021-08-12 10:56:27
 * @LastEditTime: 2021-08-12 11:07:29
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	var sum = new Array(nums.length + 1)
	var ans = 0

	sum[0] = 0

	for (let i = 0; i < nums.length; i++) {
		sum[i + 1] = sum[i] + nums[i]
	}

	for (let i = 1; i <= nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (sum[i] - sum[j] === k) {
				ans++
			}
		}
	}

	return ans
}

subarraySum([1, 3, 5, 4], 9)
// @lc code=end
