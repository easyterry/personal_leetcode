/*
 * @Author: linzhihai
 * @Date: 2022-08-03 11:22:58
 * @LastEditTime: 2022-08-03 11:28:41
 * @Description:
 */

const curry = (fn, agrs) => {
	var length = fn.length
	var args = agrs || []

	return function () {
		var newArgs = args.concat(Array.prototype.slice.call(arguments))
		if (newArgs.length >= length) {
			return fn.apply(null, newArgs)
		} else {
			return curry(fn, newArgs)
		}
	}
}

const add = (a, b, c) => {
	return a + b + c
}

const curryAdd = curry(add)

const res = curryAdd(1, 2)(3)

console.log(res)
