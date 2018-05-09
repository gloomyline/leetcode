/*
* @Author: AlanWang
* @Date:   2018-04-28 18:34:05
* @Last Modified by:   AlanWang
* @Last Modified time: 2018-05-09 17:42:44
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const nums = [...nums1, ...nums2]
  const _sortAscending = function (nums) {
    if (nums.length <= 1) {
      return nums
    }
    const leftNums = []
    const centerVal = nums[0]
    const rightNums = []
    for (let i = 1, l = nums.length; i < l; ++i) {
      const num = nums[i]
      if (num < centerVal) {
        leftNums.push(num)
      } else {
        rightNums.push(num)
      }
    }
    return [..._sortAscending(leftNums), centerVal, ..._sortAscending(rightNums)]
  }
  
  const sortedNums = _sortAscending(nums)
  
  if (sortedNums.length % 2 !== 0) {
    return sortedNums[(sortedNums.length - 1) / 2]
  } else {
    return (sortedNums[sortedNums.length / 2 - 1] + sortedNums[sortedNums.length / 2]) / 2
  }
}

module.exports = exports = findMedianSortedArrays