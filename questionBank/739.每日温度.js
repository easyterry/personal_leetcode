/*
 * @Author: linzhihai
 * @Date: 2021-08-09 10:50:02
 * @LastEditTime: 2022-07-08 11:32:54
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
 */
var dailyTemperatures = function (temperatures) {
	var stack = []
	var res = new Array(temperatures.length).fill(0)

	for (let i = temperatures.length - 1; i >= 0; i--) {
		while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
			stack.pop()
		}

		res[i] = stack.length ? stack[stack.length - 1] - i : 0
		stack.push(i)
	}

	return res
}

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
// @lc code=end
