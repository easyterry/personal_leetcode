/*
 * @Author: linzhihai
 * @Date: 2021-07-16 17:50:32
 * @LastEditTime: 2022-04-25 18:21:26
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 */
var preorderTraversal = function (root) {
  var res = [];

  function traverse(root) {
    if (root) {
      res.push(root.val);
      traverse(root.left);
      traverse(root.right);
    }
  }

  traverse(root);
  return res;
};
// @lc code=end
