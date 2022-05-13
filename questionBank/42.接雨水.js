/*
 * @Author: linzhihai
 * @Date: 2021-07-21 10:12:08
 * @LastEditTime: 2022-02-21 15:48:45
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
// 	if (height.length < 1) return 0

// 	var left = 0
// 	var right = height.length - 1

// 	var l_max = height[left]
// 	var r_max = height[right]

// 	var res = 0

// 	while (left <= right) {
// 		l_max = Math.max(l_max, height[left])
// 		r_max = Math.max(r_max, height[right])

// 		if (l_max < r_max) {
// 			res += l_max - height[left]
// 			left++
// 		} else {
// 			res += r_max - height[right]
// 			right--
// 		}
// 	}

// 	return res
// }

var trap = function (height) {
  if (height.length < 0) return 0;

  var res = 0;
  var left = 0;
  var right = height.length - 1;

  var l_max = height[left];
  var r_max = height[right];

  while (left < right) {
    l_max = Math.max(l_max, height[left]);
    r_max = Math.max(r_max, height[right]);

    if (l_max < r_max) {
      res += l_max - height[left];
      left++;
    } else {
      res += r_max - height[right];
      right--;
    }
  }

  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// @lc code=end
