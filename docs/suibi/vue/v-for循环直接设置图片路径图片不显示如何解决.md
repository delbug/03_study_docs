---
title: v-for循环直接设置图片路径图片不显示如何解决
date: 2020-06-16
tags: 
- v-for
- vue加载图片
categories: 
- 前端随笔
description: true
publish: true
---

v-for循环 直接设置图片路径图片不显示如何解决？
循环的时候这是设置src值为item.preview 是显示不出图片的，需要在src前面加个冒号 {或者是在data里面的img路径前面加 require('imgUrl') };


![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTQ5MDAwMi8yMDE5MDYvMTQ5MDAwMi0yMDE5MDYxNzIwMTkxODIxOC0xMzU2NTcxMzQ4LnBuZw?x-oss-process=image/format,png)