---
title: vue3.0 关闭 eslint
date: 2020-06-16
tags: 
- eslint
- vue eslint
- vue3.0
categories: 
- 前端随笔
description: true
publish: true
---

## vue3.0 关闭 eslint
-	和src统计目录下 创建 vue.config.js 文件
-	在vue.config.js里面 把 lintOnSave设置为false

```javascript
module.exports = {
    // 避免Eslint报错
    lintOnSave: false
}
```