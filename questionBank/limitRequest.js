/*
 * @Author: linzhihai
 * @Date: 2022-11-25 14:28:08
 * @LastEditTime: 2022-11-25 15:03:04
 * @Description:
 */
async function limitRequest(params, handler, limit) {
	const sequence = [].concat(params)
	let promises = []

	promises = sequence.splice(0, limit).map(async (param, index) => {
		try {
			await handler(param)
			return index
		} catch (error) {
			return index
		}
	})

	// sequence剩余[limit, sequence.length - 1]
	for (const item of sequence) {
		const fastestIndex = await Promise.race(promises)
		// 将新请求替换掉已完成的任务
		promises[fastestIndex] = Promise.resolve(
			new Promise((resolve) => {
				handler(item)
					.then(() => {
						resolve(fastestIndex)
					})
					.catch(() => {
						resolve(fastestIndex)
					})
			})
		)
	}

	return Promise.resolve()
}

const fetchData = async (index) => {
	await new Promise((resolve) => {
		setTimeout(() => {
			return resolve()
		}, Math.floor(Math.random() * 2000))
	})
}

const asyncArray = [1, 2, 3, 4, 5, 6, 7, 8]

limitRequest(asyncArray, fetchData, 4)
