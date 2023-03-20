/*
 * @Author: linzhihai
 * @Date: 2022-11-17 14:46:39
 * @LastEditTime: 2022-11-17 14:59:51
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * [1,2,3,4,5,6]
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
	if (head === null) {
		return []
	}

	var cur = head
	var k = 0
	var dummy = null

	while (cur !== null) {
		k += 1
		cur = cur.next
	}
	var mid = Math.floor(k / 2)
	var currentIndex = 0
	cur = head

	while (currentIndex !== mid) {
		cur = cur.next
		currentIndex++
	}

	dummy = cur
	return dummy
}
// @lc code=end
