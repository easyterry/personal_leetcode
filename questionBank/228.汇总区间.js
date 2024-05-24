/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	if (nums.length === 0) return []
	if (nums.length === 1) return [`${nums[0]}`]

	const res = []

	let slow = 0,
		fast = 1

	while (fast < nums.length) {
		if (fast - slow !== nums[fast] - nums[slow]) {
			res.push(`${nums[slow]}${nums[fast - 1] === nums[slow] ? '' : `->${nums[fast - 1]}`}`)
			slow = fast
		}

		if (fast === nums.length - 1 && nums[fast] - nums[slow] === fast - slow) {
			res.push(`${nums[slow]}${nums[fast] === nums[slow] ? '' : `->${nums[fast]}`}`)
		}

		fast++
	}

	return res
}
// [0,1,2,4,5,7]
summaryRanges([0, 1, 2, 4, 5, 7])
// @lc code=end
