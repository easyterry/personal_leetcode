/*
 * @Author: linzhihai
 * @Date: 2023-02-24 16:36:44
 * @LastEditTime: 2023-02-24 16:48:47
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
 * 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
 */
var sortedArrayToBST = function (nums) {
	if (nums.length === 0) return []

	return dfs(nums, 0, nums.length - 1)

	function dfs(nums, left, right) {
		if (left > right) return null

		var mid = Math.floor(left + (right - left) / 2)
		var root = new TreeNode(nums[mid])
		root.left = dfs(nums, left, mid - 1)
		root.right = dfs(nums, mid + 1, right)
		return root
	}
}
// @lc code=end
