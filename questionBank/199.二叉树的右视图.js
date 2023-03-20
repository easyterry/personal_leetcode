/*
 * @Author: linzhihai
 * @Date: 2023-02-01 16:43:56
 * @LastEditTime: 2023-02-02 14:48:38
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * 
 * 输入: [1,2,3,null,5,null,4]
    输出: [1,3,4]
 */
var rightSideView = function (root) {
	if (!root) return []

	var queue = [],
		res = []

	queue.push(root)

	while (queue.length) {
		var len = queue.length

		for (let i = 0; i < len; i++) {
			var node = queue.shift()

			if (i === len - 1) {
				res.push(node.val)
			}

			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
		}
	}

	return res
}
// @lc code=end
