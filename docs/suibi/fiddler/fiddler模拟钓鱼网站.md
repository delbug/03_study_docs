---
title: fiddler 模拟钓鱼网站 (修改线上环境返回自定义内容)
date: 2020-06-16
tags: 
- fiddler
- fiddler模拟
categories: 
- 前端随笔
description: true
publish: true
---

<hr><hr><hr>

### fiddler 手机抓包教程地址：[https://www.bilibili.com/video/BV177411C7Kk/](https://www.bilibili.com/video/BV177411C7Kk/)

<hr><hr><hr>

![钓鱼网站模拟](https://img-blog.csdnimg.cn/20200326073127232.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)

1.打开搜狗搜索 把请求到的sogou.js 的地址放入 Rule Editor 里面

2.把sogou.js 文件保存到桌面后修改。

![修改桌面js](https://img-blog.csdnimg.cn/2020032607324897.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)

3.第二个框选中 下拉：find a file 选中桌面修改好的 js文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200326073401779.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)

4.在打开搜狗搜索 的时候会出现刚才在js里设置的内容，跳转到其他网站 或者是广告链接。

### 结束语：建议大家不要再公共场合使用免费wifi，很有可能是钓鱼网站。骗取钱财的！


