/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
	if (!head) return head

	var dummy = new ListNode(0, head)
	var curr = dummy

	while (curr.next && curr.next.next) {
		if (curr.next.val === curr.next.next.val) {
			const x = curr.next.val

			while (curr.next && curr.next.val === x) {
				curr.next = curr.next.next
			}
		} else {
			curr = curr.next
		}
	}

	return dummy.next
}
// @lc code=end
