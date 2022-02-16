/*
 * @Author: linzhihai
 * @Date: 2021-08-17 15:31:59
 * @LastEditTime: 2021-08-17 15:42:03
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * 输入：root = [1,null,2,3]
输出：[1,3,2]
 */
var inorderTraversal = function (root) {
	var res = []

	function traversal(root) {
		if (root !== null) {
			traversal(root.left)
			res.push(root.val)
			traversal(root.right)
		}
	}

	traversal(root)
	return res
}
// @lc code=end
