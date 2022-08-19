/*
 * @Author: linzhihai
 * @Date: 2022-06-17 10:00:55
 * @LastEditTime: 2022-06-22 11:05:12
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (k === 0 || !head || !head.next) {
		return head
	}

	var n = 1
	var cur = head

	while (cur.next) {
		cur = cur.next
		n++
	}

	var add = n - (k % n)

	if (add === n) {
		return head
	}

	cur.next = head

	while (add) {
		cur = cur.next
		add--
	}

	const ret = cur.next
	cur.next = null

	return ret
}
// @lc code=end
