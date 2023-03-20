/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

    示例 1:
    输入: nums = [1,1,1,2,2,3], k = 2
    输出: [1,2]
    如果堆的元素个数小于 k，就可以直接插入堆中。
    如果堆的元素个数等于 k，则检查堆顶与当前出现次数的大小。如果堆顶更大，说明至少有 k 个数字的出现次数比当前值大，故舍弃当前值；否则，就弹出堆顶，并将当前值插入堆中。
 */
var topKFrequent = function (nums, k) {
	var map = new Map()

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1)
	}

	var queue = Array.from(map).sort((a, b) => b[1] - a[1])

	return queue.splice(0, k).map((item) => item[0])
}

topKFrequent([1, 1, 1, 2, 2, 3], 2)
// @lc code=end
