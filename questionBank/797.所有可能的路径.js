/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 * 
 *  给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）
    graph[i] 是一个从节点 i 可以访问的所有节点的列表（即从节点 i 到节点 graph[i][j]存在一条有向边）。
  
    输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
    输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
 */
var allPathsSourceTarget = function (graph) {
	const res = []
	const n = graph.length

	traverse(graph, 0, [])
    return res

	function traverse(graph, s, path) {
		path.push(s)

		if (s === n - 1) {
			res.push(path.slice(0))
            return
		}

		for (let i = 0; i < graph[s].length; i++) {
            const element = graph[s][i]

			traverse(graph, element, path)
			path.pop()
		}
	}
    
}

allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])
// @lc code=end
