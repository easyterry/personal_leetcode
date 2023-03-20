/*
 * @Author: linzhihai
 * @Date: 2021-08-20 15:58:41
 * @LastEditTime: 2023-02-02 15:16:30
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
	if (!root) return []

	var queue = [],
		res = []
	queue.push(root)

	while (queue.length) {
		var len = queue.length
		var path = []

		for (let i = 0; i < len; i++) {
			var node = queue.shift()

			path.push(node.val)
			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
		}

		res.push(path)
	}
	return res
}
// @lc code=end
