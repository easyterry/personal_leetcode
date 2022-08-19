/*
 * @Author: linzhihai
 * @Date: 2021-08-16 15:24:32
 * @LastEditTime: 2022-04-19 17:47:33
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 */
var merge = function (nums1, m, nums2, n) {
  var k = m + n - 1;
  var i = m - 1;
  var j = n - 1;

  while (j >= 0) {
    nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// @lc code=end
