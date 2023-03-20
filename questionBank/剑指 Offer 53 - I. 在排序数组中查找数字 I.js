/*
 * @Author: linzhihai
 * @Date: 2023-02-06 10:41:56
 * @LastEditTime: 2023-02-06 11:10:22
 * @Description:
 */
var search = function (nums, target) {
	var res = 0
	var startIndex = getIndex(nums, target)

	if (startIndex === nums.length || nums[startIndex] !== target) return 0

	for (let i = startIndex; i < nums.length; i++) {
		if (nums[i] !== target) break
		res++
	}

    return res
}

function getIndex(nums, target) {
	var left = 0,
		right = nums.length

	while (left < right) {
		var mid = Math.floor(left + (right - left) / 2)

		if (nums[mid] >= target) {
			right = mid
		} else if (nums[mid] < target) {
			left = mid + 1
		}
	}

	return right
}

search([5, 7, 7, 8, 8, 10], 8)
