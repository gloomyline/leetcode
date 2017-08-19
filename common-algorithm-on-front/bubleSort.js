/*
* @Author: Alan
* @Date:   2017-08-19 11:07:00
* @Last Modified by:   gloomy
* @Last Modified time: 2017-08-19 17:43:51
*/

/**
 *  bubleSort
 */

const utils = require('./utils')

function bubleSort(arr) {
	if (typeof arr !== 'object' || arr.constructor !== Array) {
		console.error('The param needed to be A Array,but got a ' + (arr.constructor || typeof arr))
	}

	for (let i = 0, l = arr.length;i < l;i++) {
		for (let j = i + 1;j < l;j++) {
			if (arr[i] > arr[j]) {
				arr[i] = arr[i] - arr[j]
				arr[j] = arr[i] + arr[j]
				arr[i] = arr[j] - arr[i]
			} 
		}
	}

	return arr 
}

module.exports = exports = bubleSort