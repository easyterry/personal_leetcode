/*
 * @Author: linzhihai
 * @Date: 2021-06-17 09:39:38
 * @LastEditTime: 2022-04-19 14:27:49
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 *  1 -> 2 -> 3 -> x
 *  x <- 1 <- 2 <- 3
 */
var reverseList = function (head) {
	let curr = head
	let prev = null

	while (curr) {
		const next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}

	return prev
}
// @lc code=end
