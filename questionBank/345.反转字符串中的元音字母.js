/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 * 
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
    元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

    示例 1：
    输入：s = "hello"
    输出："holle"

    示例 2：
    输入：s = "leetcode"
    输出："leotcede"
 */
var reverseVowels = function (s) {
	var splitArr = s.split('')
	var left = 0,
		right = s.length - 1
	var arr = ['a', 'e', 'i', 'o', 'u']

	while (left < right) {
		if (
			arr.includes(splitArr[left].toLocaleLowerCase()) &&
			arr.includes(splitArr[right].toLocaleLowerCase())
		) {
			;[splitArr[left], splitArr[right]] = [splitArr[right], splitArr[left]]
			left++
			right--
		}

		if (!arr.includes(splitArr[left].toLocaleLowerCase())) {
			left++
		}

		if (!arr.includes(splitArr[right].toLocaleLowerCase())) {
			right--
		}
	}

	return splitArr.join('')
}
reverseVowels('hello')
// @lc code=end
