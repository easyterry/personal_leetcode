/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
	// var graph = new Array(numCourses)
	// var res = []
	// var visited = []

	// if (prerequisites.length === 0) {
	// 	return new Array(numCourses).fill(0).map((_, index) => index)
	// }

	// for (let i = 0; i < numCourses; i++) {
	// 	graph[i] = []
	// }

	// for (const iterator of prerequisites) {
	// 	const from = iterator[1]
	// 	const to = iterator[0]

	// 	graph[from].push(to)
	// }

	// let queue = [0]

	// while (queue.length) {
	// 	const size = queue.length

	// 	for (let i = 0; i < size; i++) {
	// 		const element = queue.shift()

	// 		if (!visited[element]) {
	// 			res.push(element)
	// 		}

	// 		visited[element] = true

	// 		for (const item of graph[element]) {
	// 			if (!visited[item]) {
	// 				queue.push(item)
	// 			}
	// 		}
	// 	}
	// }

	// return res.length === numCourses ? res : []

	var onPath = new Array(numCourses).fill(false)
	var visited = new Array(numCourses).fill(false)
	var postOrder = []
	var res = []
	var graph = buildGraph(numCourses, prerequisites)

	let hasCycle = false

	for (let i = 0; i < numCourses; i++) {
		traverse(graph, i)
	}

	if (hasCycle) {
		return []
	}

	postOrder.reverse()

	for (let i = 0; i < numCourses; i++) {
		res[i] = postOrder[i]
	}

	return res

	function buildGraph(numCourses, prerequisites) {
		let graph = new Array(numCourses)

		for (let i = 0; i < numCourses; i++) {
			graph[i] = []
		}

		for (const edge of prerequisites) {
			const from = edge[1]
			const to = edge[0]

			graph[from].push(to)
		}

		return graph
	}

	function traverse(graph, s) {
		if (onPath[s]) {
			hasCycle = true
		}

		if (visited[s] || hasCycle) return

		visited[s] = true
		onPath[s] = true

		for (const item of graph[s]) {
			traverse(graph, item)
		}

		postOrder.push(s)
		onPath[s] = false
	}
}
// @lc code=end
