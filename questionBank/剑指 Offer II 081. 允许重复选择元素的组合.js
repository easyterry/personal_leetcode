/*
 * @Author: linzhihai
 * @Date: 2022-09-07 15:19:09
 * @LastEditTime: 2022-09-07 16:30:44
 * @Description:
 */

/**
 * 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。
candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是不同的。 
对于给定的输入，保证和为 target 的唯一组合数少于 150 个。

输入: candidates = [2,3,6,7], target = 7
输出: [[7],[2,2,3]]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/Ygoe9J
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	var path = []
	var res = []
	var sum = 0

	backtrack(0)
	return res

	function backtrack(depth) {
		if (sum >= target) {
			if (sum === target) {
				res.push(path.slice())
			}
			return
		}

		for (let i = depth; i < candidates.length; i++) {
			path.push(candidates[i])
			sum += candidates[i]
			backtrack(i)
			sum -= candidates[i]
			path.pop()
		}
	}
}

console.log(combinationSum([2, 3, 6, 7], 7))
