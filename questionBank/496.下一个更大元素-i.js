/*
 * @Author: linzhihai
 * @Date: 2021-08-02 14:32:02
 * @LastEditTime: 2021-08-06 10:15:32
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
输出: [-1,3,-1]
解释:
    对于 num1 中的数字 4 ，你无法在第二个数组中找到下一个更大的数字，因此输出 -1 。
    对于 num1 中的数字 1 ，第二个数组中数字1右边的下一个较大数字是 3 。
    对于 num1 中的数字 2 ，第二个数组中没有下一个更大的数字，因此输出 -1 。
 */
var nextGreaterElement = function (nums1, nums2) {
	var stack = []
	var res = []
	var map = new Map()

	for (let i = nums2.length - 1; i >= 0; i--) {
		while (stack.length && nums2[i] > stack[stack.length - 1]) {
			stack.pop()
		}

		map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1)
		stack.push(nums2[i])
	}

	nums1.forEach((item) => {
		res.push(map.get(item))
	})

	return res
}

nextGreaterElement([4, 1, 2], [1, 3, 4, 2])
// @lc code=end
