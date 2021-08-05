---
title: 03-jquery
date: 2020-06-15
tags: 
- jquery
categories: 
- jquery
description: true
publish: true
---


# jQuery笔记3

## 核心知识点

+ jQuery动态创建元素
+ jQuery动态追加元素
+ jQuery动态删除元素



## 一. jQuery创建元素

+ 语法：**`$('<li></li>')`** 

## 二. jQuery追加元素

### 2.1 向父元素最后追加

+ 语法：新创建jQuery对象.appendTo('父元素选择器' 或 父元素jQuery对象);

+ 语法：父元素jQuery对象.apeend(新创建的jQuery对象);

+ 代码：

  ```html
    <ul>
      <!-- <li>后裔</li> -->
    </ul>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      var datas = ['后裔','安其拉','鲁班','小乔','虞姬'];
      for(var i = 0;i < datas.length; i++) {
        $('<li></li>')
        .text(datas[i])
        .appendTo('ul');
      }
    </script>
  ```

  ​

### 2.2 向父元素最前面追加

- 语法：新创建jQuery对象.prependTo('父元素选择器');

- 语法：父元素jQuery对象.prepend(新创建的jQuery对象);

- 代码：

  ```html
    <ul>
      <!-- <li>后裔</li> -->
    </ul>
    <script src="lib/jquery-1.12.4.js"></script>
    <script>
      var datas = ['后裔','安其拉','鲁班','小乔','虞姬'];
      for(var i = 0;i < datas.length; i++) {
        // $('<li></li>')
        // .text(datas[i])
        // .prependTo('ul');

        $('ul').prepend(   $('<li></li>').text(datas[i])   );
      }
    </script>
  ```



## 三. jQuery删除元素

+ 语法：jQuery对象.remove();    删谁就让谁调用这个方法



## 四.jQuery清空元素

+ 清空方式1：==jQuery对象.empty();== 推荐使用， 清空内部的所有元素及元素相关的事件
+ 清空方式2：jQuery对象.html('');    仅仅清空内部的元素，不清清理内中的元素的事件。



## 案例：

+ 案例：购物车操作（创建、追加、删除、清空）



## 今日扩展


### 扩展1：克隆元素

+ 语法：jQuery对象.clone(布尔值);  返回克隆好的元素
  + 参数：默认是false,表示仅仅克隆内容。 true，克隆内容和事件

