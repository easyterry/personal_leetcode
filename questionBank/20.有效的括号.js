/*
 * @Author: linzhihai
 * @Date: 2021-11-30 16:12:30
 * @LastEditTime: 2022-04-12 15:47:51
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (['{', '[', '('].includes(s[i])) {
      stack.push(s[i]);
    } else {
      const peek = stack.pop();

      if (map[peek] !== s[i]) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }
  return true;
};
// @lc code=end
