/*
 * @Author: linzhihai
 * @Date: 2023-02-03 14:22:56
 * @LastEditTime: 2023-02-03 14:47:44
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * 输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
    输出：3
    解释：长度最长的公共子数组是 [3,2,1] 。
    [
        [0,1,2,3,2,1],
        [3,0,0,1,1,0],
        [2,0,1,1,2,0],
        [1,0,0,0,0,3],
        [4,0,0,0,0,0],
        [7,0,0,0,0,0],
    ]
 */
var findLength = function (nums1, nums2) {
	var m = nums1.length
	var n = nums2.length
	var dp = new Array(m + 1).fill(false).map((_) => new Array(n + 1).fill(0))
	var res = 0

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			dp[i][j] = nums1[i - 1] === nums2[j - 1] ? dp[i - 1][j - 1] + 1 : 0
			res = Math.max(res, dp[i][j])
		}
	}

    return res
}
// @lc code=end
