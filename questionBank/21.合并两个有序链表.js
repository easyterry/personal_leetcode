/*
 * @Author: linzhihai
 * @Date: 2021-12-24 10:37:25
 * @LastEditTime: 2022-05-13 14:22:33
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
  if (list1 === null && list2 === null) {
    return null;
  }
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  var result = new ListNode();
  var current = result;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;

      list1 = list1.next;
    } else {
      current.next = list2;

      list2 = list2.next;
    }

    current = current.next;
  }
  current.next = list1 ?? list2;

  return result.next;
};
// @lc code=end
