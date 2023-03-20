/*
 * @Author: linzhihai
 * @Date: 2022-11-11 17:46:18
 * @LastEditTime: 2022-11-11 17:49:03
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function () {
	this.s = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	this.s.push(x)
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
	return this.s.pop()
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
	return this.s[this.s.length - 1]
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	return this.s.length === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
