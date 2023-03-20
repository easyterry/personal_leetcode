/*
 * @Author: linzhihai
 * @Date: 2023-02-01 10:45:00
 * @LastEditTime: 2023-02-01 10:52:17
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
	var res = []
	var memo = new Map()
	traverse(root)
	return res

	function traverse(root) {
		if (!root) {
			return '#'
		}

		var left = traverse(root.left)
		var right = traverse(root.right)
		var subTree = left + ',' + right + ',' + root.val
		var freq = memo.get(subTree) || 0

		if (freq === 1) {
			res.push(root)
		}

		memo.set(subTree, freq + 1)
		return subTree
	}
}
// @lc code=end
