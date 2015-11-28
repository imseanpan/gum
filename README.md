# Gum
高度模块化,松散耦合,基于Browserify构建JavaScript应用程序“架构”。

## 说明
**Gum** 基于Browserify使用Commonjs规范。让代码更加轻量。目前来说Gum架构还非常的稚嫩，很多核心模块使用了第三方插件（其实质量也是杠杠的不用反复造轮子），对于项目来说，用得爽才是真道理，所以在接下来的时间内，我们会好好的操练他得，让它更有粘性，弹性。

## 模块介绍

### Browserify
**Browserify**是这个架构的核心模块，起到预编译的作用。所以必须安装。

安装命令

更多介绍请参考[Browserify官网](http://browserify.org/)

### artTemplate模板引擎
目前gum框架的模板引擎使用**artTemplate**，并且也是使用预编译的机制去完成任务。前端模板外置解决方案使用配套的 **tmodjs** 解决方案。

**artTemplate**语法参考[GitHub](https://github.com/aui/artTemplate)

**tmodjs**更多参考[GitHub](https://github.com/aui/tmodjs)

### lodash
lodash一开始其实是Underscore.js库的一个fork，因为和其他(Underscore.js的)贡献者意见相左，所以独立出来了。lodash本身就是基于Commonjs规范开发的，所以能够很好的与Gum框架结合在一起使用。

> 这里值得注意的是，使用lodash时，不必引用全部的模块，而是根据代码需求，用到什么模块引用什么模块，这样可以极大的减少最终JS代码的体积

**lodash**更多参考[GitHub](https://lodash.com/)

### Promise模式
对于目前来说项目的异步解决方案使用 基于 Promise模式的 q。

**q** 更多参考[GitHub](https://github.com/kriskowal/q)
### reqwest
reqwest是一个ajax单独库，使用的人很多，因为木有时间，也不想造轮子了。但是未来会替换他，根据项目的情况，在浏览器中使用传统的JS方法，但是再与APP结合的情况下，会调用Native代码来完成工作。

**reqwest** 更多参考[GitHub](https://github.com/ded/reqwest)

### 路由库
自己动手写了个路由库，很传统没什么很新鲜的，但是 只有200行 还带注释，算是个基本库，喜欢的可以自己拿去。

**director** 更多参考[GitHub](https://github.com/flatiron/director)
## 自动化单元测试
**karma** 其实是以前的Testacular。是google在2012年开源的东东，2013年改名叫**karma**。Karma是一个基于Node.js的JavaScript测试执行过程管理工具（Test Runner）。

**karma-coverage** 覆盖率测试，内核使用的是适用于Browserify的istanbul内核。


**jasmine** 是BDD测试的内核，这里使用他做单元测试的。

## 环境安装
**node.js** 安装
去[官网](https://nodejs.org/)下载后安装


**Browserify** 安装命令

```
npm install -g browserify
```

**tmodjs** 安装命令

```
npm install -g tmodjs
```
从GIT拉下代码后，在根目录执行

```
npm install
```

## 编译 测试 和 启动

> 编译代码 grunt dev
> 
> 启动测试 karma start
> 
> 模拟启动页面搜索 index.html

## License
Licensed under MIT.


