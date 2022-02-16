/*
 * @Author: linzhihai
 * @Date: 2021-08-06 14:12:45
 * @LastEditTime: 2021-08-06 14:20:08
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 *   4
   /   \
  2     7
 / \   / \
1   3 6   9
 */
var invertTree = function (root) {
	if (root === null) return null

	var tmp

	tmp = root.left
	root.left = root.right
	root.right = tmp

	invertTree(root.left)
	invertTree(root.right)

	return root
}
// @lc code=end
