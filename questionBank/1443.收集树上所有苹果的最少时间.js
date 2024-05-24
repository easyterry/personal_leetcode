/*
 * @lc app=leetcode.cn id=1443 lang=javascript
 *
 * [1443] 收集树上所有苹果的最少时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
	let graph = new Array(n)
	let visited = new Array(n)

	for (let i = 0; i < n; i++) {
		graph[i] = []
	}

	for (const edge of edges) {
		const from = edge[0]
		const to = edge[1]

		graph[from].push(to)
		graph[to].push(from)
	}

	visited[0] = true

	return traverse(graph, 0, visited, hasApple)
}

function traverse(graph, s, visited, hasApple) {
	if (!graph[s]) return 0

	let count = 0

	for (let i = 0; i < graph[s].length; i++) {
		const element = graph[s][i]

		if (!visited[element]) {
			visited[element] = true
			count += traverse(graph, element, visited, hasApple)
		}
	}
	if ((count > 0 || hasApple[s]) && s !== 0) {
		count += 2
	}

	return count
}
minTime(
	7,
	[
		[0, 1],
		[0, 2],
		[1, 4],
		[1, 5],
		[2, 3],
		[2, 6],
	],
	[false, false, true, false, true, true, false]
)
// @lc code=end
