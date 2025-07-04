/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 *
 * https://leetcode.cn/problems/advantage-shuffle/description/
 *
 * algorithms
 * Medium (51.12%)
 * Likes:    421
 * Dislikes: 0
 * Total Accepted:    72.7K
 * Total Submissions: 142.1K
 * Testcase Example:  '[2,7,11,15]\n[1,10,4,11]'
 *
 * 给定两个长度相等的数组 nums1 和 nums2，nums1 相对于 nums2 的优势可以用满足 nums1[i] > nums2[i] 的索引 i
 * 的数目来描述。
 *
 * 返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。
 *
 * 示例 1：
 * 输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
 * 输出：[2,11,7,15]
 *
 * 示例 2：
 * 输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
 * 输出：[24,32,8,12]
 *
 * 提示：
 * 1 <= nums1.length <= 10^5
 * nums2.length == nums1.length
 * 0 <= nums1[i], nums2[i] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
	const n = nums1.length
	const res = new Array(n).fill(0)
	const sort1 = new Array(n).fill(0).map((v, i) => i++)
	const sort2 = sort1.slice(0)

	sort1.sort((a, b) => nums1[a] - nums1[b])
	sort2.sort((a, b) => nums2[a] - nums2[b])

	let left = 0,
		right = nums1.length - 1

	for (let i = 0; i < n; i++) {
		if (nums1[sort1[i]] > nums2[sort2[left]]) {
			res[sort2[left]] = nums1[sort1[i]]
			left++
		} else {
			res[sort2[right]] = nums1[sort1[i]]
			right--
		}
	}

	return res
}

advantageCount([2, 0, 4, 1, 2], [1, 3, 0, 0, 2])
// @lc code=end
