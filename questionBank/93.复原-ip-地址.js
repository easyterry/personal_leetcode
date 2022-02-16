/*
 * @Author: linzhihai
 * @Date: 2021-08-18 18:24:15
 * @LastEditTime: 2021-08-18 19:09:29
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 * 输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
 */
var restoreIpAddresses = function (s) {
	var res = []
	dfs(s, res, [])
	return res

	function dfs(s, res, ip) {
		if (ip.length === 4) {
			if (s.length === 0) {
				res.push(ip.join('.'))
			}
			return
		}

		for (let i = 1; i <= 3; i++) {
			let str = s.substr(0, i)

			if (!isValid(str) || i > s.length) {
				return
			}
			ip.push(str)
			dfs(s.slice(i), res, ip)
			ip.pop()
		}
	}

	function isValid(val) {
		if (val < 0 || val > 255 || (val[0] === '0' && val.length > 1)) {
			return false
		}
		return true
	}
}

restoreIpAddresses('25525511135')
// @lc code=end
