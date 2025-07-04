/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode.cn/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (62.86%)
 * Likes:    717
 * Dislikes: 0
 * Total Accepted:    309.2K
 * Total Submissions: 491.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定二叉树的根节点 root ，返回所有左叶子之和。
 *
 * 示例 1：
 * 输入: root = [3,9,20,null,null,15,7]
 * 输出: 24
 * 解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 *
 * 示例 2:
 * 输入: root = [1]
 * 输出: 0
 *
 *
 * 提示:
 * 节点数在 [1, 1000] 范围内
 * -1000 <= Node.val <= 1000
 *
 *
 *
 *
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
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
	if (!root) return 0

	let sum = 0

	helper(root, false)

	return sum

	function helper(root, isLeft) {
		if (!root) return
		if (!root.left && !root.right && isLeft) {
			sum += root.val
		}

		root.left && helper(root.left, true)
		root.right && helper(root.right, false)
	}
}
// @lc code=end
