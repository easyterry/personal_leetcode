/*
 * @Author: linzhihai
 * @Date: 2022-09-09 16:29:40
 * @LastEditTime: 2022-09-09 16:48:43
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1019 lang=javascript
 *
 * [1019] 链表中的下一个更大节点
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
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
	var nums = []
	var res = []

	while (head !== null) {
		nums.push(head.val)
		head = head.next
	}

	var n = nums.length
	var stack = []

	for (let i = n - 1; i >= 0; i--) {
		while (stack.length && stack[stack.length - 1] <= nums[i]) {
			stack.pop()
		}

		res[i] = stack.length ? stack[stack.length - 1] : 0
		stack.push(nums[i])
	}

	return res
}
// @lc code=end
