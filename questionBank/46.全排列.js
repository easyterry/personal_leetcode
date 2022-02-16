/*
 * @Author: linzhihai
 * @Date: 2021-06-11 11:08:53
 * @LastEditTime: 2022-01-21 11:45:10
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var used = Array(nums.length).fill(false);
  var res = [];
  var len = nums.length;
  var path = [];

  function dfs(used, depth, len, res, path) {
  	if (depth === len) {
  		return res.push(path.slice())
  	}

  	for (let i = 0; i < len; i++) {
  		if (used[i]) continue

  		used[i] = true
  		path.push(nums[i])
  		dfs(used, depth + 1, len, res, path)
  		path.pop()
  		used[i] = false
  	}
  }

  dfs(used, 0, len, res, path);

  return res;
};

console.log(permute([1, 2, 3]));
// @lc code=end
