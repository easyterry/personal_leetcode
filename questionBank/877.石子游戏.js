/*
 * @Author: linzhihai
 * @Date: 2022-09-19 16:37:15
 * @LastEditTime: 2022-09-19 19:38:45
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=877 lang=javascript
 *
 * [877] 石子游戏
 */

/**
 * Alice 和 Bob 用几堆石子在做游戏。一共有偶数堆石子，排成一行；每堆都有 正 整数颗石子，数目为 piles[i] 。
    游戏以谁手中的石子最多来决出胜负。石子的 总数 是 奇数 ，所以没有平局。
    Alice 和 Bob 轮流进行，Alice 先开始 。 每回合，玩家从行的 开始 或 结束 处取走整堆石头。
    这种情况一直持续到没有更多的石子堆为止，此时手中 石子最多 的玩家 获胜 。
    假设 Alice 和 Bob 都发挥出最佳水平，当 Alice 赢得比赛时返回 true ，当 Bob 赢得比赛时返回 false 。
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
	var dp = new Array(piles.length).fill(0).map((item) =>
		new Array(piles.length).fill(0).map((_) => ({
			fir: 0,
			sec: 0,
		}))
	)

	for (let i = 0; i < piles.length; i++) {
		dp[i][i].fir = piles[i]
		dp[i][i].sec = 0
	}

	for (let i = piles.length - 2; i >= 0; i--) {
		for (let j = i + 1; j < piles.length; j++) {
			let left = piles[i] + dp[i + 1][j].sec
			let right = piles[j] + dp[i][j - 1].sec

			if (left > right) {
				dp[i][j].fir = left
				dp[i][j].sec = dp[i + 1][j].fir
			} else {
				dp[i][j].fir = right
				dp[i][j].sec = dp[i][j - 1].fir
			}
		}
	}

	const res = dp[0][piles.length - 1]
	return res.fir - res.sec >= 0
}

stoneGame([5, 3, 4, 5])
// @lc code=end
