/*
 * @Author: linzhihai
 * @Date: 2023-01-05 18:03:40
 * @LastEditTime: 2023-01-05 18:26:46
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	var count = 1
	var i = 1

	while (i < nums.length) {
		if (nums[i] === nums[i - 1]) {
			count++

			if (count > 2) {
				nums.splice(i, 1)
			} else {
                i++
            }
		} else {
			count = 1
			i++
		}
	}
}

removeDuplicates([1, 1, 1, 2, 2, 3])
// @lc code=end
