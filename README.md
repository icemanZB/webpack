### webpack 总结 <br>  
1. 安装 webpack   `npm install --save-dev webpack` <br>
> * 对于大多数项目，建议本地安装。这可以在引入破坏式变更(breaking change)的依赖时，更容易分别升级项目。 <br>
> * 通常，webpack 通过运行一个或多个 **npm scripts**，会在本地 **node_modules** 目录中查找安装的 webpack。 <br>
> * 当在本地安装 webpack 后，能够从 **node_modules/.bin/webpack** 访问它的 bin 版本。 <br>
2. 查看 webpack 版本信息 `npm info webpack` <br>
3. 安装指定版本的 webpack `npm install webpack@1.14.x --save-dev` <br>
4. 执行 webpack，会将我们的脚本作为入口起点，然后输出为 bundle.js `./node_modules/.bin/webpack src/index.js dist/bundle.js` <br>
5. 大多数项目会需要很复杂的设置，可以使用 webpack 的配置文件  **webpack.config.js** <br>
> * 如果 **webpack.config.js** 存在，则 webpack 命令将默认选择使用它。 <br>
> * `./node_modules/.bin/webpack --config webpack.config.js` --config 选项表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置非常有用。 <br>
6. 考虑到用 CLI 这种方式来运行本地的 webpack 不是特别方便，可以设置一个快捷方式。在 package.json 添加一个 npm 脚本(npm script) <br>
> * 现在，可以使用 `npm run build` 命令，来替代之前用到的较长命令。 <br>
> * 注意，使用 npm 的 **scripts**，可以通过模块名，来引用本地安装的 npm 包，而不是写出完整路径。这是大多数基于 npm 的项目遵循的标准，允许我们直接调用 webpack，而不是去调用 node_modules/webpack/bin/webpack.js。 <br>
> * 通过 `npm run build` 命令和参数之间添加两个中横线，可以将自定义参数传递给 webpack，例如：npm run build -- --colors。 <br>
package.json <br>
```
"scripts": {
    "start": "webpack --config webpack.config.js",
    "build": "webpack"
}
```
7. 加载 CSS，为了从 JavaScript 模块中 import 一个 CSS 文件，需要在 module 配置中安装并添加 **style-loader** 和 **css-loade** <br>
&nbsp;`npm install --save-dev style-loader css-loader` <br>
> * 会在 html 中加入之前在 JavaScript 模块中 import 一个 CSS 文件 <br>
> * 有的 loader 可以支持任何你可以想到的 CSS 处理器风格 - postcss, sass 和 less 等 <br>
```
<style type="text/css">
.hello{
    color: red;
}
</style>
```
8. `npm install --save-dev file-loader` 图像处理 <br>
> * 当 import MyImage from './my-image.png'，该图像将被处理并添加到 output 目录，并且 MyImage 变量将包含该图像在处理后的最终 url。 <br>
> * 当使用 css-loader 时，CSS 中的 url('./my-image.png') 会使用类似的过程去处理。 <br>
> * loader 会识别这是一个本地文件，并将 './my-image.png' 路径，替换为输出目录中图像的最终路径。html-loader 以相同的方式处理 `<img src="./my-image.png" />`。 <br>