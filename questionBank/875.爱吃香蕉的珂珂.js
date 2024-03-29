/*
 * @Author: linzhihai
 * @Date: 2022-04-20 16:42:44
 * @LastEditTime: 2022-05-13 16:42:37
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * 珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。
珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  
珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。
返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

示例 1：
输入: piles = [3,6,7,11], H = 8
输出: 4

示例 2：
输入: piles = [30,11,23,4,20], H = 5
输出: 30
 */
var minEatingSpeed = function (piles, h) {
	var left = 1
	var right = Math.max(...piles) + 1

	while (left < right) {
		var speed = Math.floor(left + (right - left) / 2)

		if (f(piles, speed, h)) {
			right = speed
		} else {
			left = speed + 1
		}
	}

	return right
}

var f = function (piles, speed, h) {
	var hour = 0

	for (const pile of piles) {
		hour += Math.ceil(pile / speed)
	}
	return hour <= h
}
// @lc code=end
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5))
