/*
 * @Author: linzhihai
 * @Date: 2021-08-19 09:57:25
 * @LastEditTime: 2021-08-19 10:28:30
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @return {number}
 * 输入：root = [4,9,0,5,1]
输出：1026
解释：
从根到叶子节点路径 4->9->5 代表数字 495
从根到叶子节点路径 4->9->1 代表数字 491
从根到叶子节点路径 4->0 代表数字 40
因此，数字总和 = 495 + 491 + 40 = 1026
 */
var sumNumbers = function (root) {
	var res = []

	binary(root, '')

	return res.reduce((previousVal, currentVal) => Number(previousVal) + Number(currentVal))

	function binary(root, sum) {
		if (root === null) {
			return
		}

		sum += root.val

		if (root.left || root.right) {
			binary(root.left, sum)
			binary(root.right, sum)
		} else {
			res.push(sum)
		}
	}
}
// @lc code=end
