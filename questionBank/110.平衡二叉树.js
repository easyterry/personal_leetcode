/*
 * @Author: linzhihai
 * @Date: 2022-04-11 10:40:39
 * @LastEditTime: 2022-06-22 15:16:50
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
	return helper(root) !== -1

	function helper(root) {
		if (root === null) {
			return 0
		}

		let left = helper(root.left)
		let right = helper(root.right)

		if (Math.abs(left - right) > 1 || left < 0 || right < 0) {
			return -1
		}
		return Math.max(left, right) + 1
	}
}

// @lc code=end
