/*
* @Author: Administrator
* @Date:   2017-08-17 00:28:45
* @Last Modified by:   gloomy
* @Last Modified time: 2017-08-19 17:44:00
*/

/**
 *  去除数组中重复的值
 */

function removeDuplicateInArray(arr) {
	if (typeof arr !== 'object' || arr.constructor !== Array) {
		console.error('The param needed to be an Array')
		return false
	}
	
	if (arr.length === 1) return arr

	var arrObj = {}, newArr = []
	for(var i = 0, l = arr.length;i < l;i++) {
		var el = arr[i]
		if (!arrObj[el]) {
			arrObj[el] = true
			newArr.push(el)
		}
	}

	return newArr
}

// var arr = [1, 14, 42, 14, 23, 11, 23, 42]
// console.log(removeDuplicateInArray(arr))

module.exports = removeDuplicateInArray