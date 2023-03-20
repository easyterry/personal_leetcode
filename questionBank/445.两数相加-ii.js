/*
 * @Author: linzhihai
 * @Date: 2022-11-17 10:50:05
 * @LastEditTime: 2022-11-17 11:37:49
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。
 * 将这两数相加会返回一个新的链表。
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 *
 * 输入：l1 = [7,2,4,3], l2 = [5,6,4]
 * 输出：[7,8,0,7]
 */
var addTwoNumbers = function (l1, l2) {
	l1 = traverse(l1)
	l2 = traverse(l2)
	var p3 = new ListNode(null)
	var cur = p3
	var sum = 0

	while (l1 || l2 || sum) {
		if (l1 !== null) {
			sum += l1.val
			l1 = l1.next
		}

		if (l2 !== null) {
			sum += l2.val
			l2 = l2.next
		}

		cur.next = new ListNode(sum % 10)
		cur = cur.next
		sum = Math.floor(sum / 10)
	}

	return traverse(p3.next)

	function traverse(head) {
		if (head === null || head.next === null) {
			return head
		}

		var last = traverse(head.next)
		head.next.next = head
		head.next = null

		return last
	}
}
// @lc code=end
