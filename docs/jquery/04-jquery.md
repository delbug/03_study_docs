---
title: 04-jquery
date: 2020-06-15
tags: 
- jquery
categories: 
- jquery
description: true
publish: true
---


# webAPI-笔记4

## 核心知识点

+ jQuery操作元素的尺寸
+ jQuery操作元素的位置
+ jQuery事件操作（注册、移除、事件委托、触发）





## 一.jQuery操作元素的尺寸

### 1.1 width和height方法

> 操作的大小仅仅是内容部分

+ 设置：

  + 语法：jQuery对象.width(数字);

+ 获取：

  + 语法：jQuery对象.width();

+ 代码：

  ```javascript
      // 获取
      var w = $('div').width();
      console.log(w);
      // 设置
      $('div').width(300);
  ```

  ​

### 1.2 innerWidth和innerHeight方法

> 操作的大小是内容部分 + padding

- 设置：

  - 语法：jQuery对象.innerWidth(数字);

- 获取：

  - 语法：jQuery对象.innerWidth();

- 代码：

  ```javascript
      // 获取
      var w = $('div').innerWidth();
      console.log(w);
      // 设置
      $('div').innerWidth(300);
  ```

  ​

### 1.3 outerWidth和outerHeight方法

> 操作的大小是内容部分 + padding + border

- 设置：

  - 语法：jQuery对象.outerWidth(数字);

- 获取：

  - 语法：jQuery对象.outerWidth();

- ```javascript
      // 获取
      var w = $('div').outerWidth();
      console.log(w);
      // 设置
      $('div').outerWidth(300);
  ```



## 二.jQuery操作元素的位置

### 2.1 获取元素距离文档的位置

+ 语法：jQuery对象.offset();   返回一个对象，对象中包含了元素的位置

+ 注意：

  > offset()方法获取的元素的位置，永远参照文档。和定位没有关系

+ 代码：

  ```javascript
      var o = $('.s').offset();
      console.log(o);
      console.log(o.top);
  ```

  

### 2.2 获取元素距离上级定位元素的位置

+ 语法：jQuery对象.position();  返回的一个对象，对象中包含了元素的位置

+ 注意：

  > position()方法获取的元素的位置,参照最近的定位元素（和定位有关系）

+ 代码：

  ```javascript
      var o = $('.s').position();
      console.log(o);
      console.log(o.top);
  ```



### 2.3 操作卷去的页面间距

+ 获取

  + 语法：jQuery对象.scrollTop();   返回数字

+ 设置

  + 语法：jQuery对象.scrollTop(数字);

+ 代码：

  ```javascript
      $('div').scroll(function(){
        // 获取被卷起的间距
        var v = $(this).scrollTop();
        console.log(v);
      });

      $('button').click(function(){
        // 设置卷起的间距
        $('div').scrollTop(0);
      });
  ```

  ​

### 案例：

+ 案例1：固定导航
+ 案例2：楼梯效果





## 三.jQuery事件操作

### 3.1 简单方式注册事件

+ 语法：jQuery对象.事件名(事件处理程序);

<img src="./media/01.png">
  ​

### 3.2 on方法注册事件

+ 注册简单事件语法：jQuery对象.on('事件名',事件处理程序);

+ 事件委托的实现：jQuery对象.on('事件名','选择器',事件处理程序);

  + 选择器：子孙元素
  + 注意：在事件处理程序中，this代表的是子孙元素（所点最先触发的）

+ 代码：

  ```javascript
      // 注册简单的事件
      $('button').on('click',function(){
        alert(1);
      });

      // 【JQ方式实现事件委托-把li委托给ul】
      $('ul').on('click','li',function(){
        // this 是谁？ 当前点击的li
        console.log(this);
        alert($(this).text());
      });
  ```

  ​

### 3.3 off方法移除事件

+ 解绑简单的事件：jQuery对象.off('click',事件处理程序名称)

+ 解绑事件委托注册的事件：jQuery对象.off('click',‘选择器’,事件处理程序名称)

+ 代码：

  ```javascript
      // 解绑按钮的事件处理程序：fn1和fn2
      $('button').off('click',fn1);
      $('button').off('click',fn2);

      // 解绑通过事件委托给p注册的事件处理程序 fn2
      $('div').off('click','p',fn2);
  ```

  ​

### 3.4 触发事件

+ 语法：jQuery对象.trigger('事件名');

+ 代码：

  ```javascript
  $('button').trigger('click');
  ```

  ​



### 3.5 事件对象

> 如何获取事件对象？
>
> ​	事件处理程序的第一个形参-e

+ 鼠标事件对象相关的属性
  + 事件对象.clientX/Y   参照浏览器
  + 事件对象.pageX/Y    参照文档
  + 事件对象.offsetX/Y   参照元素
+ 键盘事件对象相关的属性
  + 事件对象.keyCode   返回键码数字
  + 事件对象.alt/shift/ctrlKey   返回是布尔值。 检测是否按下（true）
+ 公共的属性或方法
  + 属性
    + 事件对象.target;
  + 方法：
    + 事件对象.preventDefault();   阻止默认行为
    + 事件对象.stopPropagation();  阻止事件冒泡





### 案例：

+ 案例1：用事件委托的方式实现购物车删除功能、数量添加、数量减少【作业】
+ 案例3：放大镜【作业】
+ 案例4：音乐导航条





## 自己查看文档

bind和unbind方法操作事件

delegate方法实现事件委托

