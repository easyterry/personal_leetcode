/*
 * @Author: linzhihai
 * @Date: 2021-08-16 15:51:49
 * @LastEditTime: 2021-08-16 16:07:12
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
 */
var hasPathSum = function (root, targetSum) {
	if (root === null) return false

	if (root.left === null && root.right === null) {
		return targetSum === root.val
	}

	return (
		hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
	)
}
// @lc code=end
