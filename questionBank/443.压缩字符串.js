/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 * 
 * 给你一个字符数组 chars ，请使用下述算法压缩：
    从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ：
    如果这一组长度为 1 ，则将字符追加到 s 中。
    否则，需要向 s 追加字符，后跟这一组的长度。
    压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长度为 10 或 10 以上，则在 chars 数组中会被拆分为多个字符。
    请在 修改完输入数组后 ，返回该数组的新长度。
    你必须设计并实现一个只使用常量额外空间的算法来解决此问题。

    示例 1：
    输入：chars = ["a","a","b","b","c","c","c"]
    输出：返回 6 ，输入数组的前 6 个字符应该是：["a","2","b","2","c","3"]
    解释："aa" 被 "a2" 替代。"bb" 被 "b2" 替代。"ccc" 被 "c3" 替代。
 */
var compress = function (chars) {
	var ans = 0
	var index = 0

	while (index < chars.length) {
		var char = chars[index]
		var count = 0

		while (index < chars.length && chars[index] === char) {
			++count
			++index
		}

		chars[ans++] = char

		if (count !== 1) {
			for (const iterator of count.toString()) {
				chars[ans++] = iterator
			}
		}
	}

	return ans
}
// @lc code=end
