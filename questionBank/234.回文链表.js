/*
 * @Author: linzhihai
 * @Date: 2022-11-28 16:30:15
 * @LastEditTime: 2022-11-30 10:25:02
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
	var fast = head
	var slow = head

	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}

	if (fast !== null) {
		slow = slow.next
	}

	var left = head
	var right = reverse(slow)

	while (right !== null) {
		if (left.val !== right.val) {
			return false
		}

		left = left.next
		right = right.next
	}

    return true
}

var reverse = function (head) {
	var pre = null,
		cur = head

	while (cur !== null) {
		var next = cur.next
		cur.next = pre
		pre = cur
		cur = next
	}

	return pre
}
// @lc code=end
