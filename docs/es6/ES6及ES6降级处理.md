---
title: 02-ES6及ES6降级处理
date: 2020-06-15
tags: 
- es6
categories: 
- es6
description: true
publish: true
---


# ECMAScript 6

目标：学习完 ES6 可以掌握方便后续的开发，未来工作中大量使用 ES6 开发

1. ECMAScript 6 介绍
2. ECMAScript 6 新增语法
3. 内置对象的扩展
4. ECMAScript 6 降级处理

## ECMAScript 6 介绍

### 为什么要学习ES6 ###

- 提供了更加方便的新语法**弥补** JS 语言本身的**缺陷**，新增了便捷的语法
- 给内置对象增加了更多的方法方便
- ES6 让 JS 可以开发复杂的大型项目，成为企业级开发语言
- 新的前端项目中大量使用 ES6 的新语法

### ECMAScript 6 是什么

- ECMAScript 6 又叫 ES2015，简称 ES6
- ES6 是继 ES4、ES5 之后的 JS 语言规范
- ES6 中增加了一些新的特性
- ES6 的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言
- 2015年6月发布

### 小结

- ES6 是新的 JS 的代码规范，提供了一些新特性，使我们可以开发大型应用
- ES6 弥补了 JS 语言本身的缺陷，增加了新语法，扩展了内置对象

## ECMAScript 6 新增语法

1. let 和 const
2. 解构赋值
3. 函数 (箭头函数)

### let 和 const

- let
  - let 定义变量，**变量不可以重名**，必须先定义再使用

  - **具有块级作用域**

  - 没有变量提升

  - 代码演示

    ```js
    let age = 18;
    {
        // 外部无法score，因为有块级作用域
        let score = 100;
    }
    for (let i = 0; i < 10; i++) {
        // i 只能在此范围内使用，因为有块级作用域
    }
    ```

- const

  - **常量**一旦初始化，不可以重新赋值

  - const 定义常量，常量不可以重名，必须先定义再使用
  - 具有块级作用域
  - 没有变量提升

  - 代码演示

    ```js
    // 常量名一般大写
    const PI = 3.1415926;

    // 报错，常量定义必须进行初始化
    const MAX;
    ```

- 小结

  | 关键字   | 变量提升 | 块级作用域 | 其它           |
  | ----- | ---- | ----- | ------------ |
  | let   | ×    | √     | 先定义再使用，不可以重名 |
  | const | ×    | √     | 先定义再使用，不可以重名 |
  | var   | √    | ×     | 直接使用，可以重名    |

### 解构赋值

1. 数组的解构
2. 对象的解构

ES6 允许按照一定**模式**，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

#### 数组的解构

方便获取数组中的某些项

```js
let arr = [5, 9, 10];
let [a, b, c] = arr;
console.log(a, b, c); // 输出 5 9 10
```

#### 对象的解构

- 方便解析对象中的某些属性的值

```js
// 默认情况获取到的变量需要和对象的属性同名
let obj = {foo: 'aaa', bar: 'bbb'};
let { foo, bar } = obj;

// 更改变量的名称
let obj = {foo: 'aaa', bar: 'bbb'};
let { foo: a, bar: b } = obj;
```

- 解构的过程可以进行模式匹配

```js
let obj = {
    name: 'zs',
    age: 18,
    dog: {
        name: 'BYD',
        age: 1
    }
}
// 通过模式匹配，获取 dog 的 name 和 age
// dog 是匹配源数据中的模式
let { dog: { name, age } } = obj;
```

- 对象解构在实际中的应用

```js
// 假设从服务器上获取的数据如下
let response = {
    data: ['a', 'b', 'c'],
    meta: {
        code: 200,
        msg: '获取数据成功'
    }
}
// 如何获取到 code 和 msg
let { meta: { code, msg } } = response;
```

### 函数

#### 箭头函数

ES6 中允许使用箭头定义函数 (=>  goes to)，目的是**简化函数的定义**并且里面的this也比较特殊。

- 箭头函数的定义

  ```js
  let fn = x => x * 2;
  // 等同于
  let fn = function (x) {
      return x;
  }
  ```

  如果箭头函数的只有一个参数可以省略小括号，否则参数的小括号不可以省略

  ```js
  let fn = (x, y) => x + y;
  // 等同于
  let fn = function (x, y) {
      return x + y;
  };
  ```

  如果箭头函数的代码块中有多余一条语句的话，不能省略大括号，如果需要返回值，必须添加 return

  ```js
  let fn = (x, y) => {
      console.log(arguments);
      x = 2 * x;
      y = 2 * y;
      return x + y;
  }
  ```

- 箭头函数不可以作为构造函数使用

- 箭头函数内部没有 arguments

- **箭头函数内部的 `this`** 指向外部作用域中的 `this` 

  或者可以认为 箭头函数没有自己的 `this`

#### 参数的默认值

ES6 之前函数不能设置参数的默认值

```js
// ES5 中给参数设置默认值的变通做法
function fn(x, y) {
    y = y || 'world';
    console.log(x, y);
}
// ES6 中给函数设置默认值
function fn(x, y = 'world') {
}
```

#### rest 参数

rest 参数：剩余参数，以 … 修饰最后一个参数，把多余的参数都放到一个**数组**中。可以替代 arguments 的使用

```js
// 求一组数的最大值
function getMax(...values) {
    let max = values[0];
    for (let i = 0; i < values.length; i++) {
        if (max < values[i]) {
            max = values[i];
        }
    }
    return max;
}
// 调用
console.log(getMax(6, 1, 100, 9, 10));
```

> **注意：rest 参数只能是最后一个参数**

## 内置对象的扩展

1. Array 的扩展
2. String 的扩展
3. Number 的扩展
4. Set

### Array 的扩展

- 扩展运算符

  扩展运算符，可以看成 rest 参数的逆运算，也是 **...** 可以把数组中的每一项展开

  ```js
  // 合并两个数组
  let arr1 = [1, 2];
  let arr2 = [3, 4];
  let arr3 = [...arr1, ...arr2];

  // 把数组展开作为参数，可以替代 apply
  // 求数组的最大值
  let arr = [6, 99, 10, 1];
  let max = Math.max(...arr);
  ```

- Array.from()

  把伪数组转换成数组

  ```js
  let fakeArr = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
  };

  let arr = Array.from(fakeArr);
  console.log(arr);
  ```

- 数组实例的 find() 和 findIndex()

  **find** 找到数组中第一个满足条件的成员并**返回该成员**，如果找不到返回**undefined**。

  **findIndex** 找到数组中第一个满足条件的成员并**返回该成员的索引**，如果找不到返回 **-1**。

  ```js
  // 找到数组中的第一个小于 0 的数字
  let arr = [1, 3, -5, 6, -2];
  let result = arr.find((x) => x < 0);

  // 等同于
  let result = arr.find(function (x) {
      return x < 0;
  });

  // find 回调函数有 3 个参数
  arr.find(function (item, index, ar) {
      // item  当前的值
      // index 当前的值对应的索引
      // ar 原数组
  });
  ```

  > findIndex 的使用和 find 类似

- 数组实例的 includes()

  判断数组是否包含某个值，返回 true / false

### String的扩展

- 模板字符串

  模板字符串解决了字符串拼接不便的问题(内容太长需要换行，拼接多个变量)

  模板字符串使用反引号 **`** 括起来内容

  ```js
  let name = 'zs';
  let age = 18;
  // 拼接多个变量，在模板字符串中使用占位的方式，更易懂
  let str = `我是${name}，今年${age}`;

  // 内容过多可以直接换行
  let html = `
  	<div>
  		<ul>
  			<li>itheima</li>
  		</ul>
  	</div>
  `;
  ```

- includes(), startsWith(), endsWith()

  - `includes()`		返回布尔值，表示是否找到了参数字符串
  - `startsWidth()`         返回布尔值，表示参数字符串是否在原字符串的头部
  - `endsWith()`            返回布尔值，表示参数字符串是否在原字符串的尾部。

- repeat()

  `repeat`方法返回一个新字符串，表示将原字符串重复`n`次。

  ```js
  let html = '<li>itheima</li>';
  html = html.repeat(10);
  ```

### Number的扩展

ES6 将全局方法`parseInt()`和`parseFloat()`，移植到`Number`对象上面，行为完全保持不变。

- Number.parseInt()
- Number.parseFloat()

### Set

Set 是 ES6 中新增的**内置对象**，类似于数组，**但是成员的值都是唯一的**，没有重复的值(可以实现数组去重)。

```js
// Set 可以通过一个数组初始化
let set = new Set([1, 2, 1, 5, 1, 6]);
// 数组去重
let arr = [...set];
```

- Set 的成员
  - `size`：属性，获取 `set` 中成员的个数，相当于数组中的 `length`
  - `add(value)`：添加某个值，返回 Set 结构本身。
  - `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
  - `has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
  - `clear()`：清除所有成员，没有返回值。

## ECMAScript 6 降级处理

### ES6 的兼容性问题 ###

- ES6 虽好，但是有兼容性问题，IE7-IE11 基本不支持 ES6

  [ES6 兼容性列表](http://kangax.github.io/compat-table/es6/)

- 在最新的现代浏览器、移动端、Node.js 中都支持 ES6

- 后续我们会讲解如何处理 ES6 的兼容性

### ES6 降级处理 ###

因为 ES6 有浏览器兼容性问题，可以使用一些工具进行降级处理，例如：**babel**

- 降级处理 babel 的使用步骤

   1. 安装 Node.js

   2. 命令行中安装 babel

   3. 配置文件 `.babelrc`

   4. 运行


- 安装 Node.js

     [官网](https://nodejs.org/en/)

- 项目初始化(项目文件夹不能有中文)

     ```bash
     npm init -y
     ```
- 在命令行中，安装 babel

   ```bash
   npm install  @babel/core @babel/cli @babel/preset-env
   ```

- 配置文件 `.babelrc` (手工创建这个文件)

  babel 的降级处理配置

  ```json
  {
    "presets": ["@babel/preset-env"]
  }
  ```

- 在命令行中，运行

  ```bash
  # 把转换的结果输出到指定的文件
  npx babel index.js -o test.js
  # 把转换的结果输出到指定的目录
  npx babel src -d lib
  ```

**参考：**[babel官网](https://www.babeljs.cn/)

## 扩展阅读

[ES6 扩展阅读](http://es6.ruanyifeng.com/)