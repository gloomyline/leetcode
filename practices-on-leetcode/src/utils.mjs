/*
* @Author: AlanWang
* @Date:   2018-03-13 09:29:56
* @Last Modified by:   AlanWang
* @Last Modified time: 2018-03-13 09:40:37
*/

const {
  random,
  floor,
  abs
} = Math

/**
 * Helpers for generating an Array whose members are random integers.
 * @param  {Number} start Start of the members's range
 * @param  {Number} end   end of the members's range
 * @param  {Number} num   Length of the arrary
 * @return {Array}        Needed Array.
 */
export function generateAnIntgerArray (start, end, num) {
  const arr = []
  const distance = abs(start - end)

  for (let i = 0; i < num; ++i) {
    let randomMem = floor(random() * distance) + start
    arr.push(randomMem)
  }

  return arr
}

export function deleteDuplicatesInArray (arr) {
  const newArr = []

  for (let i = 0, len = arr.length; i < len; ++i) {
    let el = arr[i]
    if (newArr.indexOf(el) < 0) {
      newArr.push(el)
    }
  }

  return newArr
}
