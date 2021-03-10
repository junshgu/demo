let path = require('path');
let fs = require('fs');

let submoduleRoot = path.resolve(__dirname, './submodule');
let targetRouterFile = path.resolve(__dirname, './src/router/index.ts');
let targetAppFile = path.resolve(__dirname, './src/App.vue');

let submodules = [];
/**
 * 检索所有的子模块
 * @param  {Function} (resolve, reject)       [description]
 * @return {[type]}             [description]
 */
let p1 = new Promise((resolve, reject) => {
	// 检索submodule下的所有目录
	fs.readdir(submoduleRoot, (err, dirs) => {
		if(err) return resolve();
		let promiseList = [];

		dirs.forEach((dir, index) => {
			// 检索submodule下的所有目录下的package.json文件
			// 如果文件存在说明是一个正常的子模块
			// 如果不存在说明是一个非正常的子模块
			promiseList.push(new Promise((resolve, reject) => {
				fs.stat(submoduleRoot + '\\' + dir + '\\package.json', (err, stat) => {
					if(err) resolve();

					if(stat.isFile()) {
						fs.readFile(submoduleRoot + '\\' + dir + '\\package.json', 'utf8', (err, data) => {
							if(err) resolve();
							data = JSON.parse(data);
							submodules.push(data.name);
							resolve();
						});
					}
				});
			}));
		});

		Promise.all(promiseList).then(() => {
			resolve();
		});
	});
});

let targetRouterFileObj = {};
let targetAppFileObj = {};
/**
 * 读取主模块的router文件和app.vue文件，并切分
 * @param  {Function} (resolve, reject)       [description]
 * @return {[type]}             [description]
 */
let p2 = new Promise((resolve, reject) => {
	// 读取router文件
	let pp1 = new Promise((resolve, reject) => {
		fs.readFile(targetRouterFile, 'utf8', (err, data) => {
			if(err) return reject();
			let contentArr = clean(data.split(/\n|\r/));
			let index = 0;

			contentArr.some((item, i) => {
				let flag = /const routes: Array<RouteConfig>/.test(item);

				if(flag) {
					index = i;
				}

				return flag;
			});

			targetRouterFileObj = {
				contentArr,
				index: index + 1,
				prefix: contentArr[index].match(/^\s*\t*/)[0] + '\t'
			};

			resolve();
		});
	});

	// 读取app.vue文件
	let pp2 = new Promise((resolve, reject) => {
		fs.readFile(targetAppFile, 'utf8', (err, data) => {
			if(err) return reject();
			let contentArr = clean(data.split(/\n|\r/));
			let index = 0;

			contentArr.some((item, i) => {
				let flag = /menus:/.test(item);

				if(flag) {
					index = i;
				}

				return flag;
			});

			targetAppFileObj = {
				contentArr,
				index: index + 1,
				prefix: contentArr[index].match(/^\s*\t*/)[0] + '\t'
			};

			resolve();
		});
	});

	Promise.all([pp1, pp2]).then(() => {
		resolve();
	}).catch(() => {
		reject();
	});
});

Promise.all([p1, p2]).then(() => {
	let imports = [];

	submodules.forEach(submodule => {
		targetAppFileObj.contentArr.splice(targetAppFileObj.index, 0, `${targetAppFileObj.prefix}{name: ${submodule}, key: ${submodule}, way: __$AutoInserter},`)
		targetRouterFileObj.contentArr.splice(targetRouterFileObj.index, 0, `${targetRouterFileObj.prefix}...__$${submodule}Routes,`);
		imports.push(`import __$${submodule}Routes from '../../submodule/${submodule}/src/router/routes.js'`);
	});

	targetRouterFileObj.contentArr = [...imports, ...targetRouterFileObj.contentArr]

	fs.writeFile(targetRouterFile, targetRouterFileObj.contentArr.join('\n'), res => {

	});

	fs.writeFile(targetAppFile, targetAppFileObj.contentArr.join('\n'), res => {

	});
});

function clean(contentArr) {
	for(let i=0; i<contentArr.length;) {
		let lineItem = contentArr[i];
		if(/__\$/.test(lineItem)) {
			contentArr.splice(i, 1);
		} else {
			i++
		}
	}

	return [...contentArr];
}