/*
 * @Author: linzhihai
 * @Date: 2023-02-17 14:53:06
 * @LastEditTime: 2023-02-17 15:19:00
 * @Description:
 */
/**
 *
 * @param {*} m
 * @param {*} n
 * @param {*} k
 *
 * 那么如何计算一个数的数位之和呢？
 * 我们只需要对数 x 每次对 10 取余，就能知道数 x 的个位数是多少，
 * 然后再将 x 除 10，这个操作等价于将 x 的十进制数向右移一位，
 * 删除个位数（类似于二进制中的 >> 右移运算符），不断重复直到 x 为 0 时结束。
 */

var movingCount = function (m, n, k) {
	var grid = new Array(m).fill(0).map((item) => new Array(n).fill(0))

    return dfs(0, 0)

	function dfs(x, y) {
		if (x < 0 || y < 0 || x > m - 1 || y > n - 1 || grid[x][y] === '') return 0

		if (sums(x) + sums(y) > k) {
			return 0
		}
		grid[x][y] = ''
		return 1 + dfs(x + 1, y) + dfs(x, y + 1)
	}
}

function sums(x) {
	var s = 0
	while (x != 0) {
		s += x % 10
		x = Math.floor(x / 10)
	}
	return s
}

movingCount(2, 3, 1)
