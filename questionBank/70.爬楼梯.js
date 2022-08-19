/*
 * @Author: linzhihai
 * @Date: 2021-10-25 11:01:00
 * @LastEditTime: 2022-04-19 14:56:51
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  var dp = [];

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};
// @lc code=end
