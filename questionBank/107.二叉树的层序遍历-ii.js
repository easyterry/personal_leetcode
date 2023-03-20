/*
 * @Author: linzhihai
 * @Date: 2023-02-02 15:26:06
 * @LastEditTime: 2023-02-02 15:35:35
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
	var res = []

	traverse(root, 0)
	return res.reverse()

	function traverse(root, depth) {
		if (!root) return

		if (!res[depth]) {
			res.push([])
		}

		root.left && traverse(root.left, depth + 1)
		root.right && traverse(root.right, depth + 1)

		var path = []
		path.push(root.val)
		res[depth].push(path)
	}
}
// @lc code=end
