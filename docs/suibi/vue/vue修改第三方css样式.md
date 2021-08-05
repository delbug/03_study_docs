---
title: vue css 修改第三方样式 使用样式穿透 >>> /deep/
date: 2020-06-16
tags: 
- vue样式
- 修改第三方样式
categories: 
- 前端随笔
description: true
publish: true
---

#### vue css 修改第三方样式 使用样式穿透 >>> /deep/
不废话 自测有两种方法：
> 注意：lange='scss' 使用第二种方法 有些Sass 之类的预处理器无法正确解析 >>>   可以使用 /deep/ 操作符( >>> 的别名) 
 1. 直接f12 查找对应的类名 在style里
 2. 面给类名加 颜色  使用css样式穿透 >>>  或者  /deep/

>  #### 第一种：直接f12 查找对应的类名 在style里面给类名加 颜色
>  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200501123456645.png)    ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200501123615328.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)



>  #### 第二种：在vue页面另外写一个style ，加上scoped 然后用样式穿透 >>> 或者 /deep/ 
>  如果使用了sass 在scss里面用样式穿透可能不能被解析出来，所以要另写一个 style   
>  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200501123334968.png) ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200501122038863.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)
