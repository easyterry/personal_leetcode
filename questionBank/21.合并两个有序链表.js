/*
 * @Author: linzhihai
 * @Date: 2022-02-16 16:36:45
 * @LastEditTime: 2022-07-05 17:38:49
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	var res = new ListNode(-1)
	var cur = res

	while (list1 && list2) {
		if (list1.val < list2.val) {
			cur.next = list1
			list1 = list1.next
		} else {
			cur.next = list2
			list2 = list2.next
		}
		cur = cur.next
	}

	cur.next = list1 ? list1 : list2
	return res.next
}
// @lc code=end
