/*
 * @Author: linzhihai
 * @Date: 2021-07-19 16:47:28
 * @LastEditTime: 2022-02-16 16:34:24
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	var len = s.length
	if (len < 2) {
		return s
	}

	let maxLen = 1
	let res = s.substring(0, 1)
	for (let i = 0; i < len - 1; i++) {
		var oddStr = centerSpread(s, i, i)
		var evenStr = centerSpread(s, i, i + 1);
		var maxLenStr = oddStr.length > evenStr.length ? oddStr : evenStr
		if (maxLenStr.length > maxLen) {
			maxLen = maxLenStr.length
			res = maxLenStr
		}
	}

	return res
}

function centerSpread(s, left, right) {
  var len = s.length;
  var i = left;
  var j = right;

  while (i >= 0 && j < len) {
    if (s[i] === s[j]) {
      i--;
      j++;
    } else {
      break;
    }
  }

  return s.substring(i + 1, j);
}

console.log(longestPalindrome('acdbab'))
// @lc code=end
