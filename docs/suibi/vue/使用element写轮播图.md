---
title: 使用element写轮播图
date: 2020-06-16
tags: 
- element
- element轮播图
categories: 
- 前端随笔
description: true
publish: true
---

```html
html

  <div class="lunbo-box">
    <el-carousel indicator-position="none">
      <el-carousel-item
        class="lunbo-box-item"
        v-for="(item,index) in abc_img"
        :key="index"
      >
        <img :src="item.src" class="lunbotu" alt="轮播图">
      </el-carousel-item>
    </el-carousel>
  </div>

```

```javascript
script

return:{
  abc_img: [
    { src: require("../../assets/banner/banner_1.jpg") },
    { src: require("../../assets/banner/banner_2.jpg") }
  ]
}
```