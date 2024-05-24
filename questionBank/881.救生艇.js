/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
	var res = 0,
		left = 0,
		right = people.length - 1

	people.sort((a, b) => a - b)

	while (left <= right) {
		if (people[left] + people[right] <= limit) {
			left++
		}
		right--
		res++
	}

	return res
}
// @lc code=end
