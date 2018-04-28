/*
* @Author: AlanWang
* @Date:   2018-04-28 17:14:51
* @Last Modified by:   AlanWang
* @Last Modified time: 2018-04-28 17:38:31
*/

/**
 * Get the length of a longest substring without repeat characters
 * @param  {[type]} s given string
 * @return {[type]}   longest substring length
 */
module.exports.lengthLongestSubstring = function (s) {
  // keep a track to store each character and its index
  const map = {}
  // keep a track to record the start index of current substring
  let startIdx = 0

  // iterate the characters array
  return s.split('').reduce((max, cha, idx) => {
    // if current character has already existed in the substring
    // just let the startIdx equal next index and go on iterating
    startIdx = map[cha] >= startIdx ? map[cha] + 1 : startIdx
    // store each characters of given string by regarding itself as key,
    // and its index is the value.
    map[cha] = idx
    // return the accumulator, here is the max length of substring
    return Math.max(max, idx - startIdx + 1)
  }, 0)
}
