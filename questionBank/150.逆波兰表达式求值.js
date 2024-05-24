/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	let stack = []

	for (let i = 0; i < tokens.length; i++) {
		if (Number.isNaN(parseInt(tokens[i]))) {
			let a = stack.pop()
			let b = stack.pop()

			let total = helper(b, a, tokens[i])
			stack.push(total)
		} else {
			stack.push(Number(tokens[i]))
		}
	}

	return stack[0]

	function helper(num1, num2, operator) {
		let total = 0

		switch (operator) {
			case '+':
				total = num1 + num2
				break
			case '-':
				total = num1 - num2
				break
			case '*':
				total = num1 * num2
				break
			case '/':
				total = Math.trunc(num1 / num2)
				break
			default:
				break
		}

		return total
	}
}

evalRPN(['4', '13', '5', '/', '+'])
