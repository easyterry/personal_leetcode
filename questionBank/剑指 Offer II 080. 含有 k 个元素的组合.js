/*
 * @Author: linzhihai
 * @Date: 2022-09-07 15:01:46
 * @LastEditTime: 2022-09-07 15:15:49
 * @Description:
 */

/**
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 输入: n = 4, k = 2
    输出:
    [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
    ]
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	var path = []
	var res = []

	backtrack(1)
	return res

	function backtrack(start) {
		if (path.length === k) {
			res.push(path.slice())
			return
		}

		for (let i = start; i <= n; i++) {
			path.push(i)
			backtrack(i + 1)
			path.pop()
		}
	}
}

console.log(combine(4, 2))