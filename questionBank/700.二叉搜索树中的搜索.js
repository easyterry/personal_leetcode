/*
 * @Author: linzhihai
 * @Date: 2023-02-03 14:13:56
 * @LastEditTime: 2023-02-03 14:18:05
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
	if (!root) return null

	if (root.val > val) {
		return searchBST(root.left, val)
	}
	if (root.val < val) {
		return searchBST(root.right, val)
	}
	return root
}
// @lc code=end
