/*
* @Author: gloomy
* @Date:   2017-08-19 17:02:02
* @Last Modified by:   gloomy
* @Last Modified time: 2017-08-19 17:49:10
*/
let isPalindrome = require('./palindrome')
let removeDuplicateInArray = require('./duplicateRemovalInArray')
let findMaxDuplicateChar = require('./getMaxCharInStr')
let bubleSort = require('./bubleSort')
let quickSort = require('./quickSort')

module.exports = exports = {
	isPalindrome: isPalindrome,
	uinique: removeDuplicateInArray,
	findMaxDuplicateChar: findMaxDuplicateChar,
	bubleSort: bubleSort,
	quickSort: quickSort
}