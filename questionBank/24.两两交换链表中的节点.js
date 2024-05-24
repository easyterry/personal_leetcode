/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * 
 * 输入：head = [1,2,3,4]
    输出：[2,1,4,3]

   [2, 1, 3, 4]
 */
var swapPairs = function (head) {
	var pre = new ListNode(null)
	pre.next = head
	var temp = pre

	while (temp.next !== null && temp.next.next !== null) {
		var slow = temp.next
		var fast = temp.next.next

		temp.next = fast
		slow.next = fast.next
		fast.next = slow
		temp = slow
	}

	return pre.next
}
// @lc code=end
