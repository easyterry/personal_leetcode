/*
 * @Author: linzhihai
 * @Date: 2021-07-16 17:50:32
 * @LastEditTime: 2022-06-02 18:59:01
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
	var stack = []
	var list = []
	stack.push(root)

	while (stack.length) {
		var node = stack.pop()

		list.push(node.val)

		if (node.right !== null) {
			stack.push(node.right)
		}

		if (node.left !== null) {
			stack.push(node.left)
		}
	}

	return list
}
// @lc code=end
