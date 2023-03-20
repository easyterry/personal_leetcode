/*
 * @Author: linzhihai
 * @Date: 2023-02-01 14:20:34
 * @LastEditTime: 2023-02-01 15:20:41
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
	var res = []
	traverse(root, '')
	return res

	function traverse(root, path) {
		if (!root) return

		path += root.val
		if (!root.left && !root.right) {
			res.push(path)
			return
		}

		path += '->'
		traverse(root.left, path)
		traverse(root.right, path)
	}
}
// @lc code=end
