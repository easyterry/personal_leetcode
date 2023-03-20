/*
 * @Author: linzhihai
 * @Date: 2022-09-19 11:05:02
 * @LastEditTime: 2022-09-19 11:44:35
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

/**
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
    假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
    你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。

    示例 1：
    输入：nums = [1,3,4,2,2]
    输出：2

    示例 2：
    输入：nums = [3,1,3,4,2]
    输出：3
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
	var left = 1,
		right = nums.length

	while (left < right) {
		var mid = Math.floor(left + (right - left) / 2)
		var count = 0

		for (const num of nums) {
			if (num <= mid) {
				++count
			}
		}

		if (count <= mid) {
			left = mid + 1
		} else {
			right = mid
		}
	}

	return right
}

findDuplicate([1, 3, 4, 2, 2])
// @lc code=end
