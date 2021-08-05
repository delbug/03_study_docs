---
title: 06-webapi
date: 2020-06-15
tags: 
- webapi
categories: 
- webapi
description: true
publish: true
---


# webAPIs-day06

## 核心知识点

+ 元素的offset系列属性
+ 元素的client系列属性
+ 元素的scrollTop属性


## 1. 元素的offset系列属性

### 1.1 获取元素的大小

+ **元素.offsetWidth   /  元素.offsetHeight;**  

  > 返回的是数字。 大小包含： 内容 + padding + border;
  >
  > 注意：该属性仅仅==只能够读取== ，不能够设置

+ 代码：

  > ```html
  >   <style>
  >     div {
  >       width: 300px;
  >       height: 300px;
  >       position: absolute;
  >       left:100px;
  >       top:100px;
  >       background: pink;
  >       border: 10px solid blue;
  >       padding: 10px;
  >     }
  >   </style>
  >     <div></div>
  >   <script>
  >     var div = document.querySelector('div');
  >     // 获取元素的大小
  >     console.log(div.offsetWidth);
  >     console.log(div.offsetHeight);
  >
  >     // 坑！设置(不能设置，是只读的)
  >     div.offsetWidth = 1000 + 'px';
  >     div.offsetHeight = 1000 + 'px';
  >  
  >   </script>
  > ```

### 1.2 获取元素的位置

+ **元素.offsetLeft  /  元素.offsetTop;**   

  > 返回的是数字。（参照谁？看定位关系）

+ 代码：

  > ```html
  >   <div class="g">
  >     <div class="f">
  >       <div class="s"></div>
  >     </div>
  >   </div>
  >   <script>
  >     var s = document.querySelector('.s');
  >     // 获取横向位置
  >     console.log(s.offsetLeft);
  >     // 获取纵向位置
  >     console.log(s.offsetTop);
  >
  >     // parentNode
  >     console.log(s.parentNode);
  >     // offsetParent
  >     console.log(s.offsetParent);
  >
  >   </script>
  > ```

### 1.3 获取元素的父元素

+ **元素.offsetParent**  和 元素.parentNode的区别

  > - 元素.offsetParent ，获取“父元素”，  按照定位关系。
  > - 元素.parentNode，  获取“父元素”，  按照标签关系。


### 1.4 图解

![](media/01.png)

### 案例： 

1. 放大境



## 2. 元素的client系列属性【了解】

### 1.1 获取元素的大小

+ **元素.clientWidth   /    元素.clientHeight ** 

  > 获取元素的大小，包含 【内容 + padding】

+ 代码：

  > ```html
  >   <div></div>
  >   <script>
  >     var div = document.querySelector('div');
  >     // 获取元素的大小
  >     console.log(div.clientWidth);
  >     console.log(div.clientHeight);
  >
  >     // 获取边框的厚度
  >     console.log(div.clientLeft);
  >     console.log(div.clientTop);
  >
  >     // 坑！设置(不能设置，是只读的)
  >     div.clientWidth = 1000 + 'px';
  >     div.clientHeight = 1000 + 'px';
  >  
  >   </script>
  > ```

### 1.2 获取边框的厚度

+ 元素.clientLeft      /      元素.clientTop  

  > 获取边框 厚度


### 1.3 图解

![](media/client.png)



## 3.元素的scroll系列属性

### 3.1 获取元素的大小

+ 元素.scrollWidth   /    元素.scrollHeight 

  > 获取的元素的大小  ,包含 【内容+ padding + 溢出】

+ 代码：

  > ```javascript
  >     var div = document.querySelector('div');
  >     console.log('scroll系列：' +div.scrollWidth);
  > ```

### 3.2 获取被卷起的页面间距

+ 元素.scrollLeft      /     **元素.scrollTop**      

  > 获取的是在该元素中卷去的页面的间距。【该属性不仅可以获取，还可以设置】
  >
  > ![](media/03.png)




### 案例

+ 回到顶部
+ 放大镜

