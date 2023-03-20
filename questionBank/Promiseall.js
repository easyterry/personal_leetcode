/*
 * @Author: linzhihai
 * @Date: 2022-04-22 18:39:14
 * @LastEditTime: 2022-04-22 18:52:31
 * @Description:
 */

const PormiseAll = function (promises) {
	const len = promises.length
	let count = 0
	let resolveList = new Array(len)

	return new Promise((resolve, reject) => {
		for (let index = 0; index < len; index++) {
			Promise.resolve(promises[index]).then((res) => {
				resolveList[index] = res
				count++

				if (count === len) {
					return resolve(resolveList)
				}
			})
		}
	}).catch((err) => {
		return reject(err)
	})
}

const promise1 = function () {
	return Promise.resolve(1)
}

const promise2 = function () {
	return Promise.reject(123)
}

async function getRes() {
	const data = await PormiseAll([promise1(), promise2()]).catch((err) => {
		console.log(err)
		throw err
	})

	console.log(data)
}

getRes()
