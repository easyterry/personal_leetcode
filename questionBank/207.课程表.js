/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * 
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
    在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，
    其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
    
    例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
    请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

    示例 1：
    输入：numCourses = 2, prerequisites = [[1,0]]
    输出：true
    解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。

    示例 2：
    输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
    输出：false
    解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 */
// var canFinish = function (numCourses, prerequisites) {
// 	var onPath = new Array(numCourses).fill(false)
// 	var visited = new Array(numCourses).fill(false)
// 	var graph = buildGraph(numCourses, prerequisites)

// 	let hasCycle = false

// 	for (let i = 0; i < numCourses; i++) {
// 		traverse(graph, i)
// 	}

// 	return !hasCycle

// 	function buildGraph(numCourses, prerequisites) {
// 		let graph = new Array(numCourses)

// 		for (let i = 0; i < numCourses; i++) {
// 			graph[i] = []
// 		}

// 		for (const edge of prerequisites) {
// 			const from = edge[1]
// 			const to = edge[0]

// 			graph[from].push(to)
// 		}

// 		return graph
// 	}

// 	function traverse(graph, s) {
// 		if (onPath[s]) {
// 			hasCycle = true
// 		}

// 		if (visited[s] || hasCycle) return

// 		visited[s] = true
// 		onPath[s] = true

// 		for (const item of graph[s]) {
// 			traverse(graph, item)
// 		}

// 		onPath[s] = false
// 	}
// }
var canFinish = function (numCourses, prerequisites) {
	var indegree = new Array(numCourses).fill(0)
	var graph = buildGraph(numCourses, prerequisites)

	for (const iterator of prerequisites) {
		const from = iterator[1]
		const to = iterator[0]

		indegree[to]++
	}

	let count = 0
	let queue = []

	for (let i = 0; i < numCourses; i++) {
		const element = indegree[i]

		if (element === 0) {
			queue.push(i)
		}
	}

	while (queue.length) {
		const current = queue.shift()
		count++

		for (const iterator of graph[current]) {
			indegree[iterator]--

			if (indegree[iterator] === 0) {
				queue.push(iterator)
			}
		}
	}

	return count === numCourses

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
}

canFinish(2, [
	[1, 0],
	[0, 1],
])
// @lc code=end
