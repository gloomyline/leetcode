/*
* @Author: Administrator
* @Date:   2017-08-17 00:12:32
* @Last Modified by:   gloomy
* @Last Modified time: 2017-08-19 17:44:49
*/

'use strict'

/**
 *  判断一个字符串是否是回文
 */

function isPalindrome(str) {
	if(typeof(str) !== 'string' || str.constructor !== String) {
		console.error('The param needed to be a string')
		return false
	}

	return str.split('').reverse().join('') === str
}

// var a = 'alannala'
// console.log(isPalindrome(a))
// 

module.exports = exports = isPalindrome