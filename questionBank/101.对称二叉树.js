/*
 * @Author: linzhihai
 * @Date: 2021-08-06 10:41:09
 * @LastEditTime: 2022-05-13 18:35:16
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
	return isEqual(root, root)

	function isEqual(left, right) {
		if (left === null && right === null) return true
		if (left === null || right === null) return false

		return (
			left.val === right.val &&
			isEqual(left.left, right.right) &&
			isEqual(left.right, right.left)
		)
	}
}
// @lc code=end
