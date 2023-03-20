/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * 示例 1:
    输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

    示例 2:
    输入: strs = [""]
    输出: [[""]]
 */
var groupAnagrams = function (strs) {
	var map = new Map()

	for (const str of strs) {
		const array = str.split('')
		array.sort()
		var key = array.toString()
		var list = map.get(key) ? map.get(key) : []
		list.push(str)
		map.set(key, list)
	}

	return Array.from(map.values())
}
// @lc code=end
