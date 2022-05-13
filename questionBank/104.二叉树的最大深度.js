/*
 * @Author: linzhihai
 * @Date: 2022-04-12 16:00:01
 * @LastEditTime: 2022-04-12 16:13:34
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 */
var maxDepth = function (root) {
  if (!root) return 0;
  
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// @lc code=end
