/*
 * @Author: linzhihai
 * @Date: 2023-01-30 16:00:34
 * @LastEditTime: 2023-01-30 16:15:07
 * @Description:
 */

function wait(delay) {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve()
		}, delay)
	)
}

function fetchRetry(url, delay, tries, fetchOptions) {
	function onError(err) {
		tries -= 1
		if (!tries) {
			throw err
		}
		return wait(delay).then(() => {
			fetchRetry(url, delay, tries, fetchOptions)
		})
	}

	return fetch(url, fetchOptions).catch(onError)
}

fetchRetry('https://3f8b3ec0-7b32-468f-8f42-120356b72a97.mock.pstmn.io/test', 1000, 3)
