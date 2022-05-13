/*
 * @Author: linzhihai
 * @Date: 2022-04-18 10:40:29
 * @LastEditTime: 2022-04-18 10:44:27
 * @Description:
 */

const templateRender = (template, data) => {
	return template.replace(/{{\s*?(\w+)\s*?}}/g, (match, key) => {
		return key && data.hasOwnProperty(key) ? data[key] : ''
	})
}

const template = `
    我是 {{ name }}, 今年 {{ age }}岁
`

const data = {
	name: 'Terry',
	age: 27,
}

console.log(templateRender(template, data))
