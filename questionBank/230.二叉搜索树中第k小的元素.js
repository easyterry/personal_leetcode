/*
 * @Author: linzhihai
 * @Date: 2023-02-02 16:32:41
 * @LastEditTime: 2023-02-02 16:35:55
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
	var res
	var rank = 0
	traverse(root)
	return res

	function traverse(root) {
		if (!root) return

		traverse(root.left)
		rank++
		if (rank === k) {
			res = root.val
			return
		}
		traverse(root.right)
	}
}
// @lc code=end
