/*
 * @Author: linzhihai
 * @Date: 2022-09-19 16:13:07
 * @LastEditTime: 2022-09-19 16:16:48
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

/**
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	nums1 = Array.from(new Set(nums1))
	nums2 = Array.from(new Set(nums2))

	var res = []

	for (let i = 0; i < nums1.length; i++) {
		if (nums2.includes(nums1[i])) {
			res.push(nums1[i])
		}
	}

	return res
}
// @lc code=end
