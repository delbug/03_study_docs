---
title: 02-jquery
date: 2020-06-15
tags: 
- jquery
categories: 
- jquery
description: true
publish: true
---


# jQuery-笔记2

## 核心知识点 

+ jQuery操作类名
+ jQuery操作标签的属性
+ jQuery操作标签的内容
+ jQuery动画实现


## 一. jQuery操作类名

### 1.1 添加类名

+ 语法：==jQuery对象.addClass('类名');== 

+ 代码：

  ```html
  <div></div>
  <script>
     $('div').addClass('show');
  </script>
  ```

  ​

### 1.2 移除类名

+ 语法：==jQuery对象.removeClass('类名');==  删除指定的类名

+ 语法：jQuery对象.removeClass();           不传参数，表示删除所有的类名

+ 代码：

  ```html
  <div></div>
  <script>
     $('div').removeClass('show');
  </script>
  ```

  ​

### 1.3 检测类名是否存在

+ 语法：==jQuery对象.hasClass('类名');==   返回true和false

+ 代码：

  ```html
  <div></div>
  <script>
     var isHas = $('div').hasClass('show');
     console.log(isHas); // false;
  </script>
  ```

  ​

### 1.4 类名切换

+ 语法：==jQuery对象.toggleClass('类名');==  若这个类名存在，则会移除该类名。否则添加该类名

+ 代码：

  ```html
  <div></div>
  <script>
     $('div').toggleClass('show');
  </script>
  ```



### 案例

+ 案例1：点击按钮隐藏和显示div
+ 案例2：tab切换




## 二. jQuery操作标签的属性

### 2.1 设置标签的属性

+ 语法：jQuery对象.attr(name,value);

+ 代码：

  ```html
  <div></div>
  <script>
      $('div').attr('pid',10010);
  </script>
  ```

  ​

### 2.2 获取标签属性值

+ 语法：jQuery对象.attr(name);

+ 代码：

  ```html
  <div></div>
  <script>
      var r = $('div').attr('pid');
  </script>
  ```

  ​

### 2.3 移除标签的属性

+ 语法：removeAttr(name);

+ 代码：

  ```html
  <div></div>
  <script>
     $('div').removeAttr('pid');
  </script>
  ```

  ​

### 2.4 prop方法操作属性

> 针对：selected、checked、disabled

+ 获取

  + 语法：$('input').prop('属性名');

  + 代码：

    ```html
    <input type="checkbox" />
    </script>
      var isC = $('input').prop('checked');  
      console.log(isC); // false;
    </script>
    ```

    ​

+ 设置

  + 语法：$('input').prop('属性名',值);

  + 代码：

    ```html
    <input type="checkbox" />
    </script>
      $('input').prop('checked',true);  
    </script>
    ```

    ​

### 案例：

+ 案例1：放大镜切换项
+ 案例2：发送验证码控制按钮禁用




## 三.jQuery操作标签的内容

### 3.1 操作标签内部的文本

+ 获取：仅仅是文本	

  + 语法：jQuery对象.text();

+ 设置：若设置标签时，标签会被当做普通文本

  + 语法：jQuery对象.text('文本内容');

  ​

### 3.2 操作标签内部的所有内容

- 获取：文本	和  内部标签

  - 语法：jQuery对象.html();

- 设置：若设置标签时，标签会被渲染

  - 语法：jQuery对象.html('文本内容');

  ​

### 3.3 操作表单元素的内容

- 获取：表单元素的value
  - 语法：jQuery对象.val();
- 设置：表单元素的value
  - 语法：jQuery对象.val('文本内容');

## 四.jQuery动画

### 4.1 基本动画

+ ==基本动画1== (缩放)
  + 显示语法：jQuery对象.show(speed,easing,fn);
    + 参数speed，动画时长，数字→毫秒
    + easing，运动的方式，默认swing表示缓冲,还有linear表示匀速
  + 隐藏语法：jQuery对象.hide(speed,easing,fn);
    - 参数speed，动画时长，数字→毫秒
    - easing，运动的方式，默认swing表示缓冲,还有linear表示匀速
  + 切换：jQuery对象.toggle(speed,easing,fn);
    - 参数speed，动画时长，数字→毫秒
    - easing，运动的方式，默认swing表示缓冲,还有linear表示匀速
+ ==基本动画2== （下拉和向上卷去）
  - 显示语法：jQuery对象.slideDown(speed,easing,fn);
    - 参数speed，动画时长，数字→毫秒
    - easing，运动的方式，默认swing表示缓冲,还有linear表示匀速
  - 隐藏语法：jQuery对象.slideUp(speed,easing,fn);
    - 参数speed，动画时长，数字→毫秒
    - easing，运动的方式，默认swing表示缓冲,还有linear表示匀速
  - 切换：jQuery对象.slideToggle(speed,easing,fn);
    - 参数speed，动画时长，数字→毫秒
    - easing，运动的方式，默认swing表示缓冲,还有linear表示匀速



+ ==基本动画3== (淡入淡出)

  - - 显示语法：jQuery对象.fadeIn(speed,easing,fn);
      - 参数speed，动画时长，数字→毫秒
      - easing，运动的方式，默认swing表示缓冲,还有linear表示匀速
  - 隐藏语法：jQuery对象.fadeOut(speed,easing,fn);
      - 参数speed，动画时长，数字→毫秒
      - easing，运动的方式，默认swing表示缓冲,还有linear表示匀速
  - 切换：jQuery对象.fadeToggle(speed,easing,fn);
      - 参数speed，动画时长，数字→毫秒
      - easing，运动的方式，默认swing表示缓冲,还有linear表示匀速

  ​

### 4.2 自定义动画

+ 语法：animate(params,[speed],[easing],[fn])

  + 参数：param 需要传入一个对象

    + > animage({
      >
      > ​	样式属性名:目标值,
      >
      > ​	样式属性名:目标值
      >
      > },1000)

### 4.2 停止动画

+ jQuery对象.stop(clearQueue,jumpToEnd);
  + 参数：clearQueue
    + true，表示清空该物体所有动画（清空队列）
    + false，表示仅仅清除当前正在运动这一个动画，默认是false
  + 参数：jumpToEnd
    + true，表示停止动画，并且直接完成运动目标。
    + false，表示停止动画，保持当前停止的状态。 不会运动到目标。 默认是false
  + 注意：开发中常用的stop方法，一般不传入实参。使用默认值。

### 案例：

+ 案例1：下拉菜单
+ 案例2：手风琴轮播图
+ 案例3：淡入淡出轮播图

