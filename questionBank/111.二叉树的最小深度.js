/*
 * @Author: linzhihai
 * @Date: 2022-09-20 18:31:53
 * @LastEditTime: 2023-01-13 10:48:57
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 *  给定一个二叉树，找出其最小深度。
    最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
    说明：叶子节点是指没有子节点的节点。
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
	if (!root) return 0

	var queue = []
	var depth = 1

	queue.push(root)

	while (queue.length) {
		var size = queue.length

		for (let i = 0; i < size; i++) {
			var temp = queue.shift()

			if (temp.left === null && temp.right === null) {
				return depth
			}
			if (temp.left !== null) {
				queue.push(temp.left)
			}
			if (temp.right !== null) {
				queue.push(temp.right)
			}
		}
		depth++
	}

	// return traverse(root)

	// function traverse(root) {
	// 	if (root === null) return 0

	// 	if (root.left === null) {
	// 		return 1 + traverse(root.right)
	// 	}

	// 	if (root.right === null) {
	// 		return 1 + traverse(root.left)
	// 	}

	// 	return Math.min(traverse(root.left), traverse(root.right)) + 1
	// }
}
// @lc code=end
