/*
 * @Author: linzhihai
 * @Date: 2021-07-30 15:36:43
 * @LastEditTime: 2023-02-20 15:27:35
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
	if (root === null) return []

	var res = []
	var path = []

	traverse(root, 0)

	return res

	function traverse(root, sum) {
		if (root === null) {
			return
		}

		sum += root.val
		path.push(root.val)

		if (sum === targetSum && root.left === null && root.right === null) {
			res.push(path.slice())
		}

		traverse(root.left, sum)
		traverse(root.right, sum)
		path.pop()
	}
}
// @lc code=end
