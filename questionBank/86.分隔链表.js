/*
 * @Author: linzhihai
 * @Date: 2022-08-24 10:33:27
 * @LastEditTime: 2022-08-24 10:39:20
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	var dummy1 = new ListNode(null)
	var dummy2 = new ListNode(null)
	var p1 = dummy1,
		p2 = dummy2
	var p = head

	while (p !== null) {
		if (p.val < x) {
			p1.next = p
			p1 = p1.next
		} else {
			p2.next = p
			p2 = p2.next
		}
		var temp = p.next
		p.next = null
		p = temp
	}

	p1.next = dummy2.next
	return dummy1.next
}
// @lc code=end
