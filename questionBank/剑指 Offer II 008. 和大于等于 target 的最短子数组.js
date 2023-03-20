/*
 * @Author: linzhihai
 * @Date: 2022-09-28 15:10:46
 * @LastEditTime: 2022-09-28 15:55:44
 * @Description:
 */

/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
    找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

    示例 1：
    输入：target = 7, nums = [2,3,1,2,4,3]
    输出：2
    解释：子数组 [4,3] 是该条件下的长度最小的子数组。

    示例 2：
    输入：target = 4, nums = [1,4,4]
    输出：1

    示例 3：
    输入：target = 11, nums = [1,1,1,1,1,1,1,1]
    输出：0

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/2VG8Kg
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	var left = 0
	var right = 0
	var n = nums.length
	var sum = 0
	var minLen = 0

	while (right < n) {
		while (sum < target) {
			sum += nums[right++]
		}

		while (sum >= target) {
			minLen = minLen === 0 ? right - left : Math.min(minLen, right - left)
			sum -= nums[left++]
		}
	}

	return minLen
}
