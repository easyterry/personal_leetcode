/*
 * @Author: linzhihai
 * @Date: 2021-07-16 16:10:38
 * @LastEditTime: 2021-07-16 16:12:34
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	var fast = head
	var slow = head

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next
		slow = slow.next

		if (slow === fast) return true
	}

	return false
}
// @lc code=end
