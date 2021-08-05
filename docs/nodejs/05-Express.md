---
title: 05-Express
date: 2020-06-15
tags: 
- nodejs
categories: 
- nodejs
description: true
publish: true
---

#  Web 开发

## Express ##

### Express 介绍 ###

- Express 是一个第三方模块
- Express 是一个基于 Node.js 平台，快速、开放、极简的 **web 开发框架**。
- 丰富的 API 支持，强大而灵活的**中间件**特性
- Express 不对 Node.js 已有的特性进行二次抽象，只是在它之上扩展了 Web 应用所需的基本功能
- [Express 官网](http://expressjs.com/)
- [Express 中文文档（非官方）](http://www.expressjs.com.cn/)
- [Express GitHub仓库](https://github.com/expressjs/express)

### 起步 ###

#### 安装 ####

> 参考文档：http://expressjs.com/en/starter/installing.html

```shell
# 创建并切换到 myapp 目录
mkdir myapp
cd myapp

# 初始化 package.json 文件
npm init -y

# 安装 express 到项目中
npm i express
```

#### Hello World ####

> 参考文档：http://expressjs.com/en/starter/hello-world.html

```javascript
// 0. 加载 Express
const express = require('express')

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express()

// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get('/', (req, res) => {
  // send方法内部调用 response.end()
  // 并且内部已经设置了 Content-Type和其它必要的响应头
  res.send('hello world')
})

// 3. 监听端口号，启动 Web 服务
app.listen(3000, () => console.log('app listening on port 3000!'))
```

### 基本路由 ###

> 参考文档：http://expressjs.com/en/starter/basic-routing.html

- 路由就像开车从北京-上海，出发之前可以查询走的路线，最终选择的那条路线就相当于**路由**

- 路由（**Routing**）是由一个 **URL**（或者叫路径标识）和一个特定的 **HTTP 方法**（GET、POST 等）组成的，涉及到应用如何处理响应客户端请求。

- 每一个路由都可以有一个或者多个处理器函数，当匹配到路由时，这个/些函数将被执行。

- 路由的定义的结构如下：

```javascript
app.METHOD(PATH, HANDLER)
```

其中：

- `app` 是 express 实例
- `METHOD` 是一个 [HTTP 请求方法](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)
- `PATH` 是服务端路径（定位标识）
- `HANDLER` 是当路由匹配到时需要执行的处理函数

下面是一些基本示例。

- 路径
  - http://127.0.0.1:3000/xxxx
  - app.get('路径')
  - 路径：域名后面的path

- 处理 get 请求

```javascript
// 当你以 GET 方法请求 / 的时候，执行对应的处理函数
app.get('/', function (req, res) {
  res.send('Hello World!')
})
```

- 处理 post 请求

```javascript
// 当你以 POST 方法请求 / 的时候，指定对应的处理函数
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```

路由的参考文档 [routing guide](http://expressjs.com/en/guide/routing.html).

### 处理静态资源 ###

参考文档：http://expressjs.com/en/starter/static-files.html

- 目录结构

  ```
  .
  ├── node_modules  npm安装的第三方包目录，使用 npm 装包会自动创建
  ├── public / statics页面需要使用的静态资源
  │   ├── css
  │   ├── js
  │   ├── images
  │   └── ...
  ├── views 所有页面（只存储 html 文件，模板）
  │   ├── publish.html
  │   └── index.html
  ├── app.js 服务端程序入口文件，执行该文件会启动我们的 Web 服务器
  ```

- express 中提供了方便的处理静态资源的方式

```javascript
// 开放 public 目录中的资源
// 不需要访问前缀
app.use(express.static('public'))
// http://127.0.0.1:3000/css/index.css
// http://127.0.0.1:3000/images/lj.jpg
// http://127.0.0.1:3000/images/timg.jpg

// 开放 files 目录资源，同上
app.use(express.static('files'))

// 限制访问前缀
app.use('/public', express.static('public'))
// http://127.0.0.1:3000/public/css/index.css

// 开放 public 目录资源，限制访问前缀
app.use('/static', express.static('public'))

// 开放 public 目录，限制访问前缀
// path.join(__dirname, 'public') 会得到一个绝对路径
app.use('/public', express.static(path.join(__dirname, 'public')))
```

**注意：** `express.static()` 使用相对路径的时候，相对于**工作目录**(执行 node 程序的目录)，推荐此处使用**绝对路径**。

### 留言板案例-静态 web 服务器 ###

```js
// 设置静态资源访问的路径
app.use('/public', express.static(path.join(__dirname, 'public')));
// 设置首页的路由
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views/index.html'));
});
```

### 解析 post 请求体 ###

> 参考文档：
>
> - [GitHub - body-parser](https://github.com/expressjs/body-parser)

- 在 Express 中没有内置获取表单 POST 请求体的 API
- 这里我们需要使用一个第三方包：`body-parser`

安装：

```shell
npm install body-parser
```

配置：

```javascript
var express = require('express')
// 0. 引包
var bodyParser = require('body-parser')

var app = express()

// 配置 body-parser
// 只要加入这个配置，则在 req 请求对象上会多出来一个属性：body
// 也就是说你就可以直接通过 req.body 来获取表单 POST 请求体数据了
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
```

**注意：** **body-parser的配置要放在，设置路由之前**

使用：

```js
// 可以通过 req.body 来获取表单 POST 请求体数据
app.post('/publish', (req, res) => {
   res.send(req.body);
});
```

### 留言板案例 ###

#### 发表留言 ####

1. 获取 post 过来的数据 - 配置body-parser

2. 读取 db.json，把内容转换成js数组对象

3. 构造留言对象，把对象添加到数组中

4. 把留言数组转换成json字符串，写入db.json

5. 提示并跳转

   ```js
   // 配置body-parser，解析post过来的数据，放到request.body中
   app.use(bodyParser.urlencoded({ extended: false }));
   app.post('/publish', (request, response) => {
     // 1. 获取 post 过来的数据
     // console.log(request.body);
     // 2. 读取 db.json，把内容转换成js数组对象
     fs.readFile(path.join(__dirname, 'db.json'), 'utf-8', (err, data) => {
       if (err) throw err;
       let msgs = JSON.parse(data);
       // 3. 构造留言对象，把对象添加到数组中
       let lastMsg = msgs[msgs.length - 1];
       let msg = {
         id: lastMsg.id + 1,
         name: request.body.name,
         content: request.body.content,
         time: '2019-1-1 10:10:10',
         img: lastMsg.img
       };
       msgs.push(msg);
       // 4. 把留言数组转换成字符串，写入db.json
       let str = JSON.stringify(msgs);
       fs.writeFile(path.join(__dirname, 'db.json'), str, (err) => {
         if (err) throw err;
         // 浏览器弹出提示，并跳转
         response.send('<script>alert("发表成功");location.href="/";</script>');
       });
     });
   });
   ```

#### 留言列表 ####

1. 安装 art-template，导入模块

2. 配置模板

   ```html
   {{ each msgs }}
   <li>
     <img src="{{ $value.img }}"  alt="" class="pic">
     <div class="list_con">
       <div class="time">
         <strong>发表时间:  <i>{{ $value.time }}</i></strong>
         <img src="public/images/lj.jpg" alt="">
       </div>
       <p><b>{{ $value.name }}：</b>  {{ $value.content }}</p>
     </div>
   </li>
   {{ /each }}
   ```

3. 读取 db.json，把内容转换成js的数组对象

4. 使用art-template渲染模板

5. 把渲染的网页，发送给浏览器

   ```js
   app.get('/', (request, response) => {
     // 读取 db.json，把内容转换成js的数组对象
     fs.readFile(path.join(__dirname, 'db.json'), 'utf-8', (err, data) => {
       if (err) throw err;
       // 把 json字符串转换成数组对象
       let msgs = JSON.parse(data);
       // 使用art-template渲染模板
       let html = template(path.join(__dirname, 'views/index.html'), {
         msgs
       });
       // 给浏览器发送响应
       response.send(html);
     });
   });
   ```

### express 模板引擎 ###

> http://expressjs.com/en/guide/using-template-engines.html)

我们可以使用模板引擎处理服务端渲染，但是 Express 为了保持其极简灵活的特性并没有提供类似的功能。

同样的，Express 也是开放的，它支持开发人员根据自己的需求将模板引擎和 Express 结合实现**服务端渲染**的能力。

#### 配置使用 art-template 模板引擎 ####

> 参考文档：
>
> - [art-template 官方文档](https://aui.github.io/art-template/)
> - [express-art-template 官方文档](https://github.com/aui/express-art-template)

这里我们以 [art-template](https://github.com/aui/art-template) 模板引擎为例演示如何和 Express 结合使用。

安装：

```shell
npm install art-template express-art-template
```

配置：

```javascript
const expressTPL = require('express-art-template');
// 默认模板都放在views文件夹中

// 设置html文件为模板
app.set('view engine', 'html');
// 设置模板交给谁去处理
app.engine('html', expressTPL);
```

使用示例：

```javascript
app.get('/', function (req, res) {
  // render 方法默认会去项目的 views 目录中查找 index.html 文件
  // render 方法的本质就是将读取文件和模板引擎渲染这件事儿给封装起来了
  // 默认模板都是html文件，这里的.html可以省略
  res.render('index', {
    title: 'hello world'
  })
})
```

如果希望修改默认的 `views` 视图渲染存储目录，可以：

```javascript
// 第一个参数 views 是一个特定标识，不能乱写
// 第二个参数给定一个目录路径作为默认的视图查找目录
app.set('views', 目录路径)
```

- 改造留言板案例

  - 下载 art-template express-art-template

  - 配置 express 模板引擎

    ```js
    const expressTPL = require('express-art-template');
    // 设置模板的后缀
    app.set('view engine', 'html');
    // 设置模板交给谁去处理
    app.engine('html', expressTPL);
    ```

  - 使用 express 模板引擎

    ```js
    response.render('index', {
      msgs
    });
    ```

#### 其它常见模板引擎 ####

JavaScript 模板引擎有很多，并且他们的功能都大抵相同，但是不同的模板引擎也各有自己的特色。

大部分 JavaScript 模板引擎都可以在 Node 中使用，下面是一些常见的模板引擎。

- ejs
- handlebars
- jade
  - 后改名为 pug

## 包与 npm ##

### 包 ###

#### 模块 ####

- 模块和文件是一一对应的，一个 Node.js 文件就是一个**模块**

- Node.js 中的模块化遵守 **CommonJS 规范**，CommonJS 是模块化的一种规范，Node.js 中实现了这种规范。

- 模块的语法
  - require
  - module.exports
  - exports

#### 什么是包 ####

- **包**(**package**)是某个独立功能的封装，包是在模块基础上更深一步的抽象。简单理解：一个包中可以包含一组功能相近的模块
- 包可以使用**文件夹**的形式来组织

#### 演示包 ####

封装一个独立的数学模块，把不同的功能放到独立的模块(js 文件)中，通过一个出口文件统一导出所有模块。

- 项目中创建一个 `math` 文件夹
- 把不同的计算功能分别封装到一个不同的模块中：add.js、sub.js、mul.js
- 在模块中使用 `modules.exports` 导出一个计算的函数
- 创建一个 `index.js`，导入所有模块，并导出相关成员
  - **注意：** 包中默认导出的模块名称是 `index.js` 

#### package.json ####

如何更改默认的导出的模块名称？此时就要使用 package.json

- 创建 `package.json`

  ```bash
  npm init 
  npm init -y
  ```

- main

  main 字段指定了加载的入口文件，`require('moduleName')` 就会加载这个文件。这个字段的默认值是模块根目录下面的`index.js`。

- dependencies  依赖(复数)

  - 软件的版本号 jQuery@3.3.1

    1. 大版本.次要版本.小版本

    1. **小版本**：当项目在进行了局部修改或 bug 修正时，修正版本号加 1
    2. **次要版本**：当项目在原有的基础上增加了部分功能时，主版本号不变，子版本号加 1
    3. **大版本**：当项目在进行了重大修改或局部修正累积较多，而导致项目整体发生全局变化时，主版本号加 1

  ```json
  "dependencies": {
      "art-template": "^4.13.2",
      "body-parser": "^1.18.3",
      "express": "^4.16.4",
      "express-art-template": "^1.0.1"
   }
  ```

  - `dependencies` 字段指定了项目运行所依赖的模块
  - **使用 `npm install` 可以安装所有的依赖**

  - 该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。
    - **指定版本**：比如`1.2.2`，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
    - **波浪号（tilde）+指定版本**：比如`~1.2.2`，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
    - **插入号（caret）+指定版本**：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x

- scripts

  `scripts`指定了运行脚本命令的 npm **命令行**缩写，比如start指定了运行`npm run start`时，所要执行的命令。

  ```bash
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node app.js",
      "t": "dir c:\\"
   }
  ```

  运行 `scripts`

  ```bash
  npm run t
  npm run start
  # 只有 start 可以简化调用
  npm start
  ```

#### 一个神秘的文件夹 ####

- 我们下载第三方包的时候，会自动把下载的第三方包，放到 `node_modules` 中。使用第三方包的时候直接 `require('第三方包的名字')`。

- 我们自己写的包也可以放到此文件夹，**加载的时候直接写包名**即可。

- `require`  的加载顺序
  - 打印 module 对象
  - 包加载的过程，按照 `module.paths` 中的路径一级一级往上查找
  - 第一次 `require()` 加载完毕，会把 模块/包 **缓存**起来，再次 `require()` 的时候直接从缓存加载

#### require 的加载机制 ####

- `require` 优先加载**缓存**中的模块
- 如果缓存中没有模块，优先加载**核心模块**，并缓存
- 如果有**相对路径**，则根据路径加载**文件模块**，并缓存
  - `require('./main')`  省略扩展名的情况
  - 先加载 `main.js`，如果没有再加载 `main.json`，如果没有再加载 `main.node`(c/c++编写的模块)
- 如果不是文件模块，也不是核心模块，则加载**第三方模块**
- node 会去 node_modules 目录中找（找跟你引用的名称一样的目录），例如这里 `require('moment')`
- 如果在 node_modules 目录中找到 `moment` 目录，则加载该模块并缓存
- 如果过程都找不到，node 则取上一级目录下找 `node_modules` 目录，规则同上
- 如果一直找到代码文件的根路径还找不到，则报错

### npm ###

- `npm` 全称 `Node Package Manager`(node 包管理器)，它的诞生是为了解决 Node 中第三方包共享的问题。
- `npm` 不需要单独安装。在安装Node的时候，会连带一起安装`npm`。
- [官网](https://www.npmjs.com/)

#### 切换 npm 镜像源 ####

- npm 存储包文件的服务器在国外，速度很慢，所以我们需要解决这个问题。

- 国内淘宝的开发团队把 npm 在国内做了一个备份，网址是：http://npm.taobao.org/。

  ```bash
  # 查看当前的源
  npm config ls
  # registry = "https://registry.npm.taobao.org/"
  
  # 下载包的时候切换源
  npm install express --registry=https://registry.npm.taobao.org
  # 全局设置
  npm config set registry https://registry.npm.taobao.org
  # 原始的路径
  # https://registry.npmjs.org/
  ```

#### 常用命令 ####

- 查看 `npm` 版本

  ```bash
  npm --version
  npm -v
  ```

- 升级 `npm`

  ```bash
  npm install npm --global
  npm install npm -g
  ```

- 初始化 `package.json`

  ```bash
  npm init -y
  ```

- 安装第三方包

  ```bash
  npm install 包名 --save
  npm install 包名
  npm install 包名 包名
  npm install 包名@版本号
  # 简写
  npm i 包名
  ```

- 从缓存目录安装包

  ```bash
  # 查看缓存目录
  npm config get cache
  # 从缓存目录下载包
  # --cache-min 后面跟的是时间，单位是分钟，超过这个时间才去服务器下载
  npm install --cache-min 9999999 <package-name>
  ```

#### 全局命令行工具 ####

- 全局安装和本地安装
  - 本地安装

    指的是将一个包下载到当前项目的`node_modules`子目录，然后只有在项目目录之中，才能调用这个包。

  - 全局安装

    指的是将一个模块安装到系统目录中，各个项目都可以调用。一般来说，全局安装只适用于工具模块。

  ```bash
  # 查看全局安装目录
  npm config ls
  
  # prefix 是全局安装目录
  # prefix = "C:\\Users\\你的用户名\\AppData\\Roaming\\npm"
  ```

- 演示全局安装的工具
  - http-server

  > https://github.com/indexzero/http-server#readme

  - nodemon

  > http://nodemon.io/

  - less

  > http://lesscss.org/

  - browser-sync

    npm install -g browser-sync

  > https://browsersync.io/

 
