---
title: 07-webapi
date: 2020-06-15
tags: 
- webapi
categories: 
- webapi
description: true
publish: true
---


# webAPI-day08

## 核心知识点

+ touch事件（touchstart、touchmove、touchend）;
+ touchEvent 事件对象
+ transitionend事件



## 1. touch事件类型

> ​	移动设备上无法使用鼠标，当手指触碰屏幕时会触发 click、mousedown、mouseup 事件。
>
> 但是，touch事件要比鼠标事件执行效率高，用户体验好。
>
> **注意：以下事件必须通过事件监听注册** 

+ touchstart，手指按下事件
+ touchmove，手指移动事件
+ touchend，手指松开事件


## 2. touch事件对象

+ 常见的属性

  > 1. 事件对象.touches ：位于屏幕上的所有手指的列表；
  > 2. 事件对象.targetTouches ：位于该元素上的所有手指的列表；
  > 3. 事件对象.changedTouches：被改变的手指列表。

+ 手指的位置

  > 1. 手指对象.clientX/Y 手指相对于可视区域
  > 2. 手指对象.pageX/Y 手指相对于文档
  >
  > **注意：手指对象.clientX/Y 使用较多**  

事件类型===>touchstart，touchmove，touchend【添加给元素，事件监听】

事件对象===>【参数传递e】,【手指列表e.touches【列表，伪数组，通过下标获取某一个手指对象】】

手指位置==>【通过事件对象==>手指对象，获取手指的位置】

touchstart屏幕的某个位置打印出位置的值



## 3.常见的手势

> ​	注意：以下手势的实现是在touch事件基础上。我们不需要自己实现以下所有手势，有专门的第三方可以直接拿来使用。
>
> ​	以下手势仅仅是了解。

![](media/01.png)



### 案例：

<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

1. 模拟tap手势（点击）
2. 模拟drag手势（拖拽）
3. 模拟flick手势（轻滑）
4. 移动端京东轮播图




## 4. transitionend事件

> css中过渡结束后检测的行为

