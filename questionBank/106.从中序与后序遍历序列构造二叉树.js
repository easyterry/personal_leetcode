/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * 
 * 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
    输出：[3,9,20,null,null,15,7]
 */
var buildTree = function (inorder, postorder) {
	var dictionary = {}

	for (let i = 0; i < inorder.length; i++) {
		dictionary[inorder[i]] = i
	}

	return recur(0, inorder.length - 1, postorder.length - 1)

	function recur(inStart, inEnd, postEnd) {
		if (inStart > inEnd) return null

		var node = new TreeNode(postorder[postEnd])
		var i = dictionary[postorder[postEnd]]
		// console.log('1:', inStart, i - 1, postEnd - (inEnd + 1 - i))
		// console.log('2:', i + 1, inEnd, postEnd - 1)
		// console.log('=============')
		node.left = recur(inStart, i - 1, postEnd - (inEnd + 1 - i))
		node.right = recur(i + 1, inEnd, postEnd - 1)
		return node
	}
}

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}

buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
// @lc code=end
