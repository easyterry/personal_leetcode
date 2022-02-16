/*
 * @Author: linzhihai
 * @Date: 2021-07-30 15:36:43
 * @LastEditTime: 2021-07-30 16:08:29
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
	if (root === null) return 0

	var pathLeading = count(root, targetSum)
	var leftPath = pathSum(root.left, targetSum)
	var rightPath = pathSum(root.right, targetSum)

	return pathLeading + leftPath + rightPath
}

function count(root, targetSum) {
	if (root === null) return 0

	var isMe = root.val === targetSum ? 1 : 0
	var leftCount = count(root.left, targetSum - root.val)
	var rightCount = count(root.right, targetSum - root.val)

	return isMe + leftCount + rightCount
}
// @lc code=end
