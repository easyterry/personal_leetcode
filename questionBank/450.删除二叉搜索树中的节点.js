/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
	if (!root) return null
	if (root.val === key) {
		if (!root.left) return root.right
		if (!root.right) return root.left

		var minNode = getMinNode(root.right)

		root.right = deleteNode(root.right, minNode.val)
		minNode.left = root.left
		minNode.right = root.right
		root = minNode
	} else if (root.val > key) {
		root.left = deleteNode(root.left, key)
	} else if (root.val < key) {
		root.right = deleteNode(root.right, key)
	}
	return root
}

function getMinNode(root) {
	while (root.left) {
		root = root.left
	}

	return root
}
// @lc code=end
