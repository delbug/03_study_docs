---
title: 05-webapi
date: 2020-06-15
tags: 
- webapi
categories: 
- webapi
description: true
publish: true
---

# webAPI-day05

## 核心知识点

+ 定时器



## 1. BOM

### 1.1 BOM介绍

> BOM的概念：浏览器对象模型。
>
> ![](media/01.png)

### 1.2 顶级对象-window

+ **window对象介绍** 

  > 1. window对象被 称为==顶级对象== 或==全局对象== 。
  > 2.  因为全局变量和全局函数本质上都是window对象的属性或方法。
  > 3. window对象可以省略。

+ **window中的对话框** 

  > - alert
  > - prompt
  > - confirm

+ **定时器1：** **window.setTimeout(callback, time);**   

  > + 作用：延迟执行一段程序，仅仅执行==一次== （定时炸弹），返回一个数字，表示是哪个定时器。
  > + 参数：
  >   - callback, 函数定义，函数体中存放定义器要执行的代码。
  >   - time, 等待的时间，数字，表示的是毫秒
  > + 清除定时器：**window.clearTimeout(定时器的标识);** 
  > + 代码：
  >
  >   ```javascript
  >       // 开启一个定时器
  >       var num1 = setTimeout(function(){
  >         // 定时器延迟时间到达后，要执行的代码
  >         console.log('爆炸了,Duang~~~1') ;
  >       },5000);
  >   
  >       // 开启一个定时器
  >       var num2 = setTimeout(function(){
  >         // 定时器延迟时间到达后，要执行的代码
  >         console.log('爆炸了,Duang~~~2') ;
  >       },5000);
  >       console.log(num1,num2);
  >   ```
  >
  >
  >       // 获取按钮
  >       var btn = document.querySelector('button');
  >       btn.onclick = function() {
  >         // 清除定时器
  >         clearTimeout(num1);
  >         clearTimeout(num2);
  >       };
  >   ```
  > 
  >   ```

+ **定时器2：window.setInterval(callback, time); ** 

  > - 作用：延迟执行一段程序，==重复执行== （闹钟）。返回一个数字，表示是哪个定时器。
  > - 参数：
  >   - callback, 函数定义，函数体中存放定义器要执行的代码。
  >   - time, 等待的时间，数字，表示的是毫秒
  > - 清除定时器：**window.clearInterval(定时器的标识);** 
  > - 代码：
  >
  >   ```javascript
  >       // 开启一个定时器
  >       var num = setInterval(function(){
  >         var date = new Date();
  >         console.log(date);
  >       },1000);
  >   ```
  >
  > 
  >
  >       // 获取按钮
  >       var btn = document.querySelector('button');
  >       btn.onclick = function () {
  >         clearInterval(num);
  >       };
  >
  >   ```
  > 
  >   ```



### 1.3 location对象

- **location**对象，将来操作浏览器的地址栏。
- 属性：
  - location.href  设置或获取地址栏地址
- 方法：
  - location.reload(); 刷新页面



### 1.4 history对象

- **history对象** ，用来操作历史记录
- 属性：
  - history.length;  获取历史记录的长度
- 方法：
  - history.back();    回退上一个历史记录
  - history.forward();  前进下一个历史记录
  - history.go(数字);  正数，表示前进； 负数，表示回退；


### 1.5 navigator对象

- navigator对象， 用来获取浏览器的信息。
- 属性：
  - navigator.userAgent; 用来获取浏览器的信息


### 1.6 onload事件

+ onload事件是页面加载事件，一般绑定给window

### 案例

1. 倒计时
2. 点击按钮跳转网页

