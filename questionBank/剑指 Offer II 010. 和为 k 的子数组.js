/*
 * @Author: linzhihai
 * @Date: 2022-09-28 14:34:07
 * @LastEditTime: 2022-09-28 14:53:29
 * @Description:
 */

/**
 * 给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。

    示例 1：
    输入:nums = [1,1,1], k = 2
    输出: 2
    解释: 此题 [1,1] 与 [1,1] 为两种不同的情况

    示例 2：
    输入:nums = [1,2,3], k = 3
    输出: 2

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/QTMn0o
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	var n = nums.length
	var res = 0
	var sum = 0
	var map = new Map()

	map.set(0, 1)

	for (let i = 0; i < n; i++) {
		sum += nums[i]

		if (map.has(sum - k)) {
			res += map.get(sum - k)
		}

		map.set(sum, (map.get(sum) || 0) + 1)
	}

	return res
}
