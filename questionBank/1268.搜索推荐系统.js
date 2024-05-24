/*
 * @lc app=leetcode.cn id=1268 lang=javascript
 *
 * [1268] 搜索推荐系统
 */

// @lc code=start
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var TrieNode = function () {
	this.next = []
	this.suggestions = []
}

var suggestedProducts = function (products, searchWord) {
	var res = []
	let root = new TrieNode()

	for (let i = 0; i < products.length; i++) {
		let node = root
		let word = products[i]

		for (const iterator of word) {
			if (!node.next[iterator.charCodeAt() - "a".charCodeAt()]) {
				node.next[iterator.charCodeAt() - "a".charCodeAt()] = new TrieNode()
			}

			node = node.next[iterator.charCodeAt() - "a".charCodeAt()]
			if(!node.suggestions.includes(word)) {
                node.suggestions.push(word)
                node.suggestions.sort((a, b) => a.localeCompare(b, 'en'))
                if (node.suggestions.length > 3) {
					node.suggestions.pop()
				}
            }
		}
	}

	let node = root

	for (const iterator of searchWord) {
		if (node) {
			node = node.next[iterator.charCodeAt() - "a".charCodeAt()]
		}

		res.push(node ? node.suggestions : [])
	}

	return res
}

suggestedProducts(["code", "codephone", "coddle", "coddles", "codes"], "coddle")
// @lc code=end
