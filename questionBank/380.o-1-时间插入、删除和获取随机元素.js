/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function () {
	this.set = new Set()
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (this.set.has(val)) {
		return false
	}

	this.set.add(val)
	return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (!this.set.has(val)) return false

	this.set.delete(val)
	return true
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	const array = Array.from(this.set)

	if (array.length === 0) return null

	if (array.length === 1) return array[0]

	const index = Math.floor(Math.random() * array.length)

	return array[index]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
