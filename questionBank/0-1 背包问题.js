/*
 * @Author: linzhihai
 * @Date: 2022-09-02 10:50:05
 * @LastEditTime: 2022-09-02 11:47:20
 * @Description:
 */

/**
 * N = 3, W = 4
    wt = [2, 1, 3]
    val = [4, 2, 3]
 * @param {*} N 
 * @param {*} W 
 * @param {*} val 
 * @param {*} wt 
 */
var bag = function (N, W, val, wt) {
	var dp = Array.from({ length: N + 1 }, () => new Array(W + 1).fill(0))

	for (let i = 1; i <= N; i++) {
		for (let j = 1; j <= W; j++) {
			if (j - wt[i - 1] < 0) {
				dp[i][j] = dp[i - 1][j]
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - wt[i - 1]] + val[i - 1])
			}
		}
	}

	return dp[N][W]
}

console.log(bag(3, 4, [2, 1, 3], [4, 2, 3]))
