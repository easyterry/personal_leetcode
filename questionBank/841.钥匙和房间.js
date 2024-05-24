/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
	var visited = new Array(rooms.length).fill(false)
	visited[0] = true
	dfs(rooms[0])

	function dfs(keys) {
		for (let i = 0; i < keys.length; i++) {
			const element = keys[i]

			if (!visited[element]) {
				visited[element] = true
				dfs(rooms[element])
			}
		}
	}

	return visited.filter(Boolean).length === rooms.length
}

// @lc code=end
