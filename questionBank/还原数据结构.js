/*
 * @Author: linzhihai
 * @Date: 2022-04-13 16:26:39
 * @LastEditTime: 2022-04-19 10:57:39
 * @Description:
 */
// 有一个原始结构，如：
const list = [
	// 注意这里，专门把pid为1的元素放一个在前面
	{ id: 2, name: '部门2', pid: 1 },
	{ id: 1, name: '部门1', pid: 0 },
	{ id: 3, name: '部门3', pid: 1 },
	{ id: 4, name: '部门4', pid: 3 },
	{ id: 5, name: '部门5', pid: 4 },
	{ id: 7, name: '部门7', pid: 6 },
]

const tree = [
	{
		id: 1,
		name: '部门1',
		pid: 0,
		children: [
			{
				id: 2,
				name: '部门2',
				pid: 1,
				children: [],
			},
			{
				id: 3,
				name: '部门3',
				pid: 1,
				children: [
					{
						id: 4,
						name: '部门4',
						pid: 3,
						children: [
							{
								id: 5,
								name: '部门5',
								pid: 4,
								children: [],
							},
						],
					},
				],
			},
		],
	},
]

const treeToArray = (tree) => {
	const list = []
	const queue = [...tree]

	while (queue.length) {
		const element = queue.shift()

		if (element.children && element.children.length) {
			queue.push(...element.children)
		}

		delete element.children

		list.push(element)
	}

	return list
}

const arrayToTree = (array) => {
	const res = []

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[i].pid === array[j].id) {
				if (array[j].children === undefined) {
					array[j].children = []
				}
				array[j].children.push(array[i])
			}
		}
		if (!array[i].pid) {
			res.push(array[i])
		}
	}

	return res
}

console.log(treeToArray(tree))
console.log(arrayToTree(list))
