/*
 * @Author: linzhihai
 * @Date: 2023-02-23 15:09:49
 * @LastEditTime: 2023-02-23 18:50:41
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
	var dictionary = {}

	for (let i = 0; i < inorder.length; i++) {
		dictionary[inorder[i]] = i
	}

	return recur(0, 0, inorder.length - 1)

	function recur(root, left, right) {
		if (left > right) return null

		var node = new TreeNode(preorder[root])
		var i = dictionary[preorder[root]]
		node.left = recur(root + 1, left, i - 1)
		node.right = recur(root + (i - left) + 1, i + 1, right)
		return node
	}
}

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
// @lc code=end
