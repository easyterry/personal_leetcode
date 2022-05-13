/*
 * @Author: linzhihai
 * @Date: 2022-04-13 10:33:53
 * @LastEditTime: 2022-04-13 10:44:19
 * @Description:
 */
const monkeyEatPeach = (n) => {
	if (n >= 10) return 1

	return (monkeyEatPeach(n + 1) + 1) * 2
}
