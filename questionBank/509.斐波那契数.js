/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 输入：n = 2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
 */
var fib = function (n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return fib(n - 2) + fib(n - 1);
};
// @lc code=end
