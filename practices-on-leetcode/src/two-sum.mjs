/*
* @Author: AlanWang
* @Date:   2018-03-13 09:25:57
* @Last Modified by:   AlanWang
* @Last Modified time: 2018-03-13 09:40:59
*/

/**
 * Given an array of integers, return indices of the two numbers
 * such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.
 *
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 */

export function towSum (nums, target) {
  const assumedIndices = []
  for (let i = 0, len = nums.length; i < len; ++i) {
    for (let j = i + 1; j < len; ++j) {
      if (nums[i] + nums[j] === target) {
        assumedIndices.push([i, j])
      }
    }
  }
  if (assumedIndices.length === 0) {
    console.error('There are not two numbers which are sumed equal to the target in the given array.')
  } else if (assumedIndices.length === 1) {
    return assumedIndices[0]
  } else {
    console.error('There are more than one solution to sum the two numbers which are all in the array equal to the target!')   
  }
}



