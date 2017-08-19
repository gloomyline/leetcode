/*
* @Author: Alan
* @Date:   2017-08-19 11:07:00
* @Last Modified by:   gloomy
* @Last Modified time: 2017-08-19 11:28:22
*/

/**
 *  bubleSort
 */

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

/**
 * 生成随机整数数组
 * @param  {[int]} start  整数范围起点
 * @param  {[int]} end    [description]
 * @param  {[int]} length [description]
 * @return {[Array]}        [description]
 */
function genRandintArr(start, end, length) {
	let arr = [], range = end - start
	for (let i = 0; i < length; i++) {
		arr[i] = Math.ceil(Math.random() * range)
	}
	return arr
}

let arr = genRandintArr(1, 10, 10)
let sortedArr = bubleSort(arr)
console.log(sortedArr)