/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	nums.sort((a, b) => a - b)
	var ans = nums[0] + nums[1] + nums[2]

	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i - 1] === nums[i]) continue

		var left = i + 1,
			right = nums.length - 1

		while (left < right) {
			var sum = nums[i] + nums[left] + nums[right]

			if (Math.abs(sum - target) < Math.abs(ans - target)) {
				ans = sum
			}

			if (sum > target) {
				right--
			} else if (sum < target) {
				left++
			} else {
				return sum
			}
		}
	}

    return ans
}

threeSumClosest([1, 1, 1, 0], -100)
// @lc code=end
