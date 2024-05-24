/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
	var res = 0,
		h = getHeight(root)

	if (h < 0) return 0
	while (root) {
		if (getHeight(root.right) === h - 1) {
			res += 1 << h
			root = root.right
		} else {
			res += 1 << (h - 1)
			root = root.left
		}
		--h
	}

	return res
}

function getHeight(root) {
	return root ? 1 + getHeight(root.left) : -1
}
// @lc code=end
