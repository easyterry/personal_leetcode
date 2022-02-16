/*
 * @Author: linzhihai
 * @Date: 2021-08-09 15:28:37
 * @LastEditTime: 2021-08-09 17:26:46
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
	var successor = null

	function reverseList(head, n) {
		if (n === 1) {
            successor = head.next
            return head
        }
	}
}

// @lc code=end
