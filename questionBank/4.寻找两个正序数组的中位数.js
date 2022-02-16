/*
 * @Author: linzhihai
 * @Date: 2021-08-19 10:32:14
 * @LastEditTime: 2021-08-19 10:46:42
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	var nums3 = nums1.concat(nums2)

	nums3.sort((a, b) => a - b)

	var middle = Math.floor(nums3.length / 2)

	if (nums3.length % 2 === 0) {
		return (nums3[middle] + nums3[middle - 1]) / 2
	}
	return nums3[middle]
}

findMedianSortedArrays([1, 3], [2])
// @lc code=end
