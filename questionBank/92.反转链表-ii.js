/*
 * @Author: linzhihai
 * @Date: 2021-08-09 15:28:37
 * @LastEditTime: 2022-11-16 15:26:12
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
 */
var reverseBetween = function (head, left, right) {
	var successor = new ListNode(null)

	if (left === 1) {
		return reverseN(head, right)
	}
	head.next = reverseBetween(head.next, left - 1, right - 1)
	return head

	function reverseN(head, n) {
		if (n === 1) {
			successor = head.next
			return head
		}

		var last = reverseN(head.next, n - 1)
		head.next.next = head
		head.next = successor

		return last
	}
}

// @lc code=end
