/*
 * @Author: linzhihai
 * @Date: 2021-08-06 15:35:20
 * @LastEditTime: 2022-11-11 16:11:46
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
	if (root === null) {
		return
	}

	flatten(root.left)
	flatten(root.right)

	var left = root.left
	var right = root.right

	root.left = null
	root.right = left

	var p = root

	while (p.right !== null) {
		p = p.right
	}

	p.right = right
}
// @lc code=end
