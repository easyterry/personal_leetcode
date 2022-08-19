/*
 * @Author: linzhihai
 * @Date: 2022-08-17 15:06:52
 * @LastEditTime: 2022-08-17 15:14:48
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += checkPalindrome(s, i, i);
    count += checkPalindrome(s, i, i + 1);
  }
  return count;
};

function checkPalindrome(s, start, end) {
  let count = 0;
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    count++;
    start--;
    end++;
  }
  return count;
}
// @lc code=end
