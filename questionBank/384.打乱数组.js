/*
 * @Author: linzhihai
 * @Date: 2021-08-16 14:38:08
 * @LastEditTime: 2021-08-16 15:18:22
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * 输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
 */
var Solution = function (nums) {
	this.nums = nums
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
	return this.nums
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
	var newNums = JSON.parse(JSON.stringify(this.nums))

	var randInt = function (minNum, maxNum) {
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
	}

	var swap = function (nums, i, j) {
		var temp

		temp = nums[i]
		nums[i] = nums[j]
		nums[j] = temp
	}

	for (let i = newNums.length - 1; i > 0; i--) {
		var rand = randInt(0, i)

		swap(newNums, i, rand)
	}

	return newNums
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
