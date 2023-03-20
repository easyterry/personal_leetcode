/*
 * @Author: linzhihai
 * @Date: 2022-11-17 17:32:45
 * @LastEditTime: 2022-11-17 18:46:22
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
	var stack = []
	var p = head
	var dummy = new ListNode(null)

	while (p !== null) {
		stack.push(p.val)
		p = p.next
	}

	p = dummy

	stack.sort((a, b) => a - b)

	for (let i = 0; i < stack.length; i++) {
		p.next = new ListNode(stack[i])
        p = p.next
	}

	return dummy.next
}
// @lc code=end
