/*
* @Author: Alan
* @Date:   2017-08-20 06:52:56
* @Last Modified by:   gloomy
* @Last Modified time: 2017-08-20 07:08:16
*/

/**
 *  题目描述：求从10到100中能被3或5整除的数的和
 */

function sum () {
	let _sum = 0
	for (let i = 10;i <= 100;i++) {
		if (i % 3 === 0 || i % 5 === 0) _sum += i		
	}
	return _sum
}

console.log(sum())