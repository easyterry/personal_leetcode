/*
 * @Author: linzhihai
 * @Date: 2021-08-06 15:16:09
 * @LastEditTime: 2021-08-06 15:30:55
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	if (root === null) return null

	connectNode(root.left, root.right)
	return root

	function connectNode(root1, root2) {
		if (root1 === null || root2 === null) return

		root1.next = root2

		connectNode(root1.left, root1.right)
		connectNode(root2.left, root2.right)
		connectNode(root1.right, root2.left)
	}
}
// @lc code=end
