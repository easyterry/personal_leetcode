/*
 * @Author: linzhihai
 * @Date: 2021-08-16 18:20:53
 * @LastEditTime: 2021-08-17 09:58:28
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 * 输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
 */
var removeNthFromEnd = function (head, n) {
	var dummy = new ListNode(0, head)
	var fast = head
	var slow = dummy

	for (let i = 0; i < n; i++) {
		fast = fast.next
	}

	while (fast !== null) {
		fast = fast.next
		slow = slow.next
	}

	slow.next = slow.next.next
	var ans = dummy.next
	return ans
}
// @lc code=end
