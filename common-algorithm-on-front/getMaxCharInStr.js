/*
* @Author: gloomyline
* @Date:   2017-08-17 00:28:45
* @Last Modified by:   gloomyline
* @Last Modified time: 2017-08-17 00:59:43
*/

/**
 *  统计一个字符串中出现次数最多的字母
 */

function findMaxDuplicateChar(str) {
	if(typeof str !== 'string' || str.constructor !== String) {
		var paramType = typeof str? typeof str : str.constructor
		console.error('The param needed to be a string,but got a ' + paramType)
	}
	
	var strObj = {}
	for(let i = 0, l = str.length;i < l;i++) {
		let char = str[i]
		if(!strObj[char]) {
			strObj[char] = 1
		} else {
			strObj[char]++
		}
	}
	
	let maxDuplicateChar = ''
	for(let k in strObj) {
		if (!maxDuplicateChar) {
			maxDuplicateChar = k
		} else {
			if (strObj[maxDuplicateChar] < strObj[k]) {
				maxDuplicateChar = k
			}
		}
	}

	return [maxDuplicateChar, strObj[maxDuplicateChar]]
}

let str = 'afjghdlfraaaasddenas'
let res = findMaxDuplicateChar(str)
console.log(res[0], res[1])