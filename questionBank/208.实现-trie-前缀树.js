/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
var TrieNode = function (val) {
	this.val = val
	this.children = []
	this.isWord = false
}

var Trie = function () {
	this.root = new TrieNode()
}

var computeIndex = function (word) {
	return word.charCodeAt(0) - 'a'.charCodeAt(0)
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
	let ws = this.root

	for (let i = 0; i < word.length; i++) {
		let currentIndex = computeIndex(word[i])

		if (!ws.children[currentIndex]) {
			ws.children[currentIndex] = new TrieNode(word[i])
		}

		ws = ws.children[currentIndex]
	}

	ws.isWord = true
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
	let ws = this.root

	for (let i = 0; i < word.length; i++) {
		let currentIndex = computeIndex(word[i])

		if (!ws.children[currentIndex]) return false
		ws = ws.children[currentIndex]
	}
	return ws.isWord
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
	let ws = this.root

	for (let i = 0; i < prefix.length; i++) {
		let currentIndex = computeIndex(prefix[i])

		if (!ws.children[currentIndex]) return false
		ws = ws.children[currentIndex]
	}

	return true
}

// var obj = new Trie()
// obj.insert('apple')
// obj.search('app')
// obj.insert('app')

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
