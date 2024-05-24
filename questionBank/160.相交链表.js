/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	var currA = headA,
		currB = headB
	var lenA = 0,
		lenB = 0

	while (currA) {
		++lenA
		currA = currA.next
	}

	while (currB) {
		++lenB
		currB = currB.next
	}

	currA = headA
	currB = headB

	var gap = Math.abs(lenA - lenB)

	while (gap) {
		if (lenA > lenB) {
			currA = currA.next
		} else {
			currB = currB.next
		}
		gap--
	}

	while (currA && currB) {
		if (currA === currB) {
			return currA
		}
		currA = currA.next
		currB = currB.next
	}

    return null
}
// @lc code=end
