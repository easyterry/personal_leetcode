/*
 * @Author: linzhihai
 * @Date: 2021-08-09 18:25:34
 * @LastEditTime: 2021-08-16 17:32:57
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 * 输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"
 */
var compareVersion = function (version1, version2) {
	var arr1 = version1.split('.')
	var arr2 = version2.split('.')
	var len1 = arr1.length
	var len2 = arr2.length
	var maxLen = Math.max(len1, len2)
	var i1, i2

	for (let i = 0; i < maxLen; ++i) {
		i1 = i < len1 ? parseInt(arr1[i]) : 0
		i2 = i < len2 ? parseInt(arr2[i]) : 0

		if (i1 !== i2) {
			return i1 > i2 ? 1 : -1
		}
	}

	return 0
}

compareVersion('1.01', '1.001')
// @lc code=end
