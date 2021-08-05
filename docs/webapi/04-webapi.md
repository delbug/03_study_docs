---
title: 04-webapi
date: 2020-06-15
tags: 
- webapi
categories: 
- webapi
description: true
publish: true
---

# webAPIs-day04

## 4. 其他操作

### 4.1 插入元素

- 语法：**父节点.insertBefore(新的节点,旧的子节点)** 
- 代码：

### 4.2 替换元素

- 语法：**父节点.replaceChild(新的节点,旧的子节点)** 

### 4.3 克隆元素

- 语法：元素.cloneNode(true或false);  返回一份新的克隆后的元素
  - true，克隆元素内部所有的内容
  - false,默认，克隆的是外部的标签

输入事件：oninput 

## 核心知识点

+ 事件监听注册和移除事件
+ 事件流（事件的三个阶段）
+ 事件对象
+ 事件委托


## 1. 事件监听

### 1.1 为什么要学事件监听

> 需求：给一个元素连续绑定两次点击事件，并且事件处理程序都有效。

### 1.2 事件监听注册事件

+ 语法：**事件源.addEventListener('事件类型',事件处理程序,是否捕获);** 

  > 事件源 → 操作的元素
  >
  > 事件类型→ 在此不加on,  onclick→click
  >
  > 事件处理程序→ 函数
  >
  > 是否捕获，可选参数，默认为false。 true→ 捕获，false→冒泡

+ 代码：

  > ```javascript
  >     // 需求：给一个元素连续绑定两次点击事件，并且事件处理程序都有效。
  >     var btn = document.querySelector('button');
  >     // 注册一个点击事件
  >     btn.addEventListener('click',function(){
  >       console.log(1);
  >     });
  > ```



### 1.3 事件监听移除事件

+ 语法：**事件源.removeEventListener('事件类型',事件处理程序的名称)**

  > - 事件源，操作的元素
  > - 事件类型，不加on
  > - 事件处理程序的名字：函数名
  >   - 注意：若将来要通过事件监听的方式移除事件时，之前注册事件**要把事件处理程序单独抽取出来命名** 。

+ 代码：

  > ```html
  >   <button>按钮</button>
  >   <script>
  >     // 需求：给一个元素连续绑定两次点击事件，并且事件处理程序都有效。
  >     var btn = document.querySelector('button');
  >     // 注册一个点击事件
  >     var fn1 = function() {
  >       console.log('1');
  >     };
  >     var fn2 = function() {
  >       console.log('2');
  >     };
  >     var fn3 = function() {
  >       console.log('3');
  >     };
  >     btn.addEventListener('click',fn1);
  >     btn.addEventListener('click',fn2);
  >     btn.addEventListener('click',fn3);
  >
  >     // 移除事件(前提：注册事件处理程序时，事件处理程序要有名字，而不是匿名函数)
  >     btn.removeEventListener('click',fn2);
  >     btn.removeEventListener('click',fn1);
  >     btn.removeEventListener('click',fn3);
  >
  >     
  >     
  >   </script>
  > ```


## 2. 事件流

### 2.1 什么是事件流

> ![](media/01.png)
> **事件流** ：事件触发后的三个阶段（捕获阶段、==目标阶段==、==冒泡阶段==）。
>
> **注意：** 在事件触发后，这三个阶段始终是存在的，**顺序① 先捕获，② 到达目标，③ 再冒泡。**  但是在触发后，针对捕获和冒泡，仅仅启用一个。



### 2.2 事件冒泡

> ![](media/02.png)
>
> + 事件冒泡：目标阶段→document





### 2.3 事件捕获

> ![](media/03.png)
>
> + 事件捕获：document→目标阶段;  反冒泡。了解即可



## 3. 事件对象

event

### 3.1 什么是事件对象

> 事件对象，在事件==触发后== ，在==事件处理程序中== （函数体），所获取并操作的==对象==。
>
> 事件对象中存放了和当前事件相关的信息（比如鼠标的位置、键盘按下哪个键等等）

### 3.2 获取事件对象

> + 语法：**`事件源.事件类型 = function(e){  // 第一个形参e就是事件对象    }`** 

### 3.3 鼠标事件对象相关属性

+ 鼠标事件类型

  + onclick
  + onmouseenter
  + onmouseleave
  + onmousedown 鼠标按下
  + onmouseup      鼠标弹起
  + onmousemove 鼠标移动

+ 鼠标事件对象相关属性-获取鼠标的位置

  > - 事件对象.clientX   /    事件对象.clientY    参照是==浏览器== 
  > - 事件对象.pageX   /    事件对象.pageY    参照是==文档== 
  > - 事件对象.offsetX   /    事件对象.offsetY    参照是==当前的元素== 
  >   ![](media/04.png)

  ​

### 3.4 键盘事件对象相关属性

+ 键盘事件

  > - 事件类型
  >   - onkeydown    键盘按下事件
  >   - onkeyup         键盘弹起事件
  > - 注意：
  >   - 一般情况给document绑定键盘事件。

  

+ 键盘事件对象相关属性-键盘按下哪个键

  > - ==事件对象.keyCode==     获取键盘按键对应的键码值
  > - 事件对象.altKey        表示alt键是否按下，返回布尔值。
  > - 事件对象.shiftKey        表示shift键是否按下，返回布尔值。
  > - ==事件对象.ctrlKey==        表示ctrl键是否按下，返回布尔值。true（按下），false(没有按下)


### 3.5 事件对象的公共属性和方法

+ 属性：

  > - ==事件对象.target==     获取最先触发的元素
  > - 和this的区别
  >   - this在事件处理程序中始终代表的是事件源
  >   - e.target 代表不一定是事件源，代表的是最先触发的元素【目标阶段→ document】

+ 方法：

  > + 事件对象.preventDefault();   阻止默认行为
  > + ==事件对象.stopPropagation();==   停止冒泡传播



### 案例：

1. 图片跟着鼠标移动

2. 拖拽（元素的offsetLeft 和 offsetTop）

   ​

