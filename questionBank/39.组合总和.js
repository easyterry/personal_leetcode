/*
 * @Author: linzhihai
 * @Date: 2021-08-19 10:57:16
 * @LastEditTime: 2022-08-19 16:43:01
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 输入: candidates = [2,3,6,7], target = 7
输出: [[7],[2,2,3]]
 */
var combinationSum = function (candidates, target) {
  var path = [];
  var res = [];
  candidates.sort((a, b) => a - b);
  backtrack(candidates, target, path, 0);

  return res;

  function backtrack(candidates, target, path, depth) {
    if (target === 0) {
      return res.push(path.slice());
    }

    for (let i = depth; i < candidates.length; i++) {
      if (target - candidates[i] < 0) {
        break;
      }

      path.push(candidates[i]);
      backtrack(candidates, target - candidates[i], path, i);
      path.pop();
    }
  }
};

combinationSum([2, 3, 5], 8);
// @lc code=end
