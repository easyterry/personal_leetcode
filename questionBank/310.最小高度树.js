/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 * 
 * 树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。
    给你一棵包含 n 个节点的树，标记为 0 到 n - 1 。给定数字 n 和一个有 n - 1 条无向边的 edges 列表（每一个边都是一对标签），
    其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条无向边。
    可选择树中任何一个节点作为根。当选择节点 x 作为根节点时，设结果树的高度为 h 。
    在所有可能的树中，具有最小高度的树（即，min(h)）被称为 最小高度树 。
    请你找到所有的 最小高度树 并按 任意顺序 返回它们的根节点标签列表。
    树的 高度 是指根节点和叶子节点之间最长向下路径上边的数量。
 */
var findMinHeightTrees = function (n, edges) {
    if(edges.length === 0) {
        return [0]
    }

	let graph = []
	let degree = new Array(n).fill(0)
	let res = []

	for (let i = 0; i < n; i++) {
		graph[i] = []
	}

	for (const iterator of edges) {
		const from = iterator[0]
		const to = iterator[1]

		graph[from].push(to)
		graph[to].push(from)

		degree[from]++
		degree[to]++
	}

	let queue = []

	for (let i = 0; i < degree.length; i++) {
		if (degree[i] === 1) {
			queue.push(i)
		}
	}

	while (queue.length) {
		const size = queue.length
		const list = []

		for (let i = 0; i < size; i++) {
			const current = queue.shift()

			list.push(current)
			for (const item of graph[current]) {
                degree[item]--
                
                if(degree[item] === 1) {
                    queue.push(item)
                }
			}
		}
        res = list
	}

    return res
}

findMinHeightTrees(4, [
	[1, 0],
	[1, 2],
	[1, 3],
])
// @lc code=end
