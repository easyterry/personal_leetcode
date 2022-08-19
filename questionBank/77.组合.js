/*
 * @Author: linzhihai
 * @Date: 2022-08-17 17:10:00
 * @LastEditTime: 2022-08-17 17:20:28
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @description 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */
var combine = function (n, k) {
  var ans = [];
  var path = [];
  dfs(1, path);

  return ans;

  function dfs(start, path) {
    if (path.length === k) {
      ans.push(path.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      dfs(i + 1, path);
      path.pop();
    }
  }
};
// @lc code=end
