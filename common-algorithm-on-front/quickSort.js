/*
* @Author: Alan
* @Date:   2017-08-19 16:38:06
* @Last Modified by:   gloomy
* @Last Modified time: 2018-05-09 17:28:30
*/

const utils = require('./utils')

/**
 * 快速排序数组
 * @param  {[Array]} arr 		需要排序的数组
 * @param  {[Boolean]} model 	false: 从小到大,true: 从大到小,默认从小到大
 * @return {[Array]}     		排序完成的数组
 */
function quickSort(arr, model) {
	if(!utils.isArray(arr)) {
		console.error('The param needed to be an Array, but got a ' + (arr.constructor || typeof arr))
		return false
	}

	if (arr.length <= 1) return arr
	
	let left = [], right = [], centerVal = arr[0]
	for (let i = 1;i < arr.length;i++) {
		let el = arr[i]
		if (!model) {
			if (el < centerVal) {
				left.push(el)
			} else {
				right.push(el)
			}
		} else {
			if (el < centerVal) {
				right.push(el)
			} else {
				left.push(el)
			}
		}
	}

	return Array.prototype.concat(quickSort(left, model), [centerVal], quickSort(right, model))
}

// let arr = utils.generateRandintArray(1, 100, 20)
// console.log(quickSort(arr, true))
// 
module.exports = exports = quickSort