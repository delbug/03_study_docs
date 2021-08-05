---
title: 导入图片用require,不能直接导入
date: 2020-06-16
tags: 
- vueimg
- reuqire()
categories: 
- 前端随笔
description: true
publish: true
---

### 导入图片用require

```javascript
 img: [
      //错误导入
        {
          img:"../../assets/pice11.png"    
          title: "是图片1"
        },
      //正确导入
        {
          img: require("../../assets/pice11.png"),
          title: "这是图片2"
        }
      ]
```