/*
* @Author: Alan
* @Date:   2017-08-19 16:39:14
* @Last Modified by:   gloomy
* @Last Modified time: 2017-08-19 17:11:35
*/

/**
 *  辅助工具函数模块
 */

/**
 *  数据类型检测
 */

/**
 * 是否是数字值
 * @param  {[any]}  o 检测对象
 * @return {Boolean}   返回的bool值
 */
function isNumber(o) {
	if (typeof o === 'number' && o.constructor === Number) return true
	return false
}

/**
 * 是否是对象
 * @param  {[any]}  o 检测对象
 * @return {Boolean}   返回的bool值
 */
function isObject(o) {
	if (typeof o === 'object' && o.constructor === Object) return true
	return false
}

/**
 * 是否是字符串
 * @param  {[any]}  o 检测对象
 * @return {Boolean}   返回的bool值
 */
function isString(o) {
	if (typeof o === 'string' && o.constructor === String) return true
	return false
}

/**
 * 是否是数组
 * @param  {[any]}  o 检测对象
 * @return {Boolean}   返回的bool值
 */
function isArray(o) {
	if (typeof o === 'object' && o.constructor === Array) return true
	return false
}

/**
 * 是否是函数
 * @param  {[any]}  o 检测对象
 * @return {Boolean}   返回的bool值
 */
function isFunction(o) {
	if (typeof o === 'function' && o.constructor === Function) return true
	return false
}

/**
 * 数组操作
 */

/**
 * 生成随机整数数组
 * @param  {[int]} start  随机整数范围起始值
 * @param  {[int]} end    随机整数范围终止值
 * @param  {[int]} length 生成的数组长度
 * @return {[Array]}      生成的数组
 */
function generateRandintArray(start, end, length) {
	let range = end - start, arr = []
	for (let i = 0;i < length;i++) {
		arr.push(Math.floor(Math.random() * range) + start)
	}

	return arr
}


module.exports = {
	isNumber: isNumber,
	isObject: isObject,
	isString: isString,
	isArray: isArray,
	isFunction: isFunction,
	generateRandintArray: generateRandintArray
}
