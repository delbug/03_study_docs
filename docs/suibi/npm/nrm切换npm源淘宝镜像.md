---
title: nrm 切换npm源 淘宝镜像
date: 2020-06-16
tags: 
- nrm
- npm
- 淘宝镜像
categories: 
- 前端随笔
description: true
publish: true
---



## nrm 切换npm源 淘宝镜像
下载 nrm  ： `npm i nrm`

查询 列表 ：`nrm ls`
```bash
PS C:\Users\link\Desktop\WebSocket> nrm ls

  npm -------- https://registry.npmjs.org/       
  yarn ------- https://registry.yarnpkg.com/     
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/  
  nj --------- https://registry.nodejitsu.com/   
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/    
```

切换源 ：`nrm use npm `
```bash
PS C:\Users\link\Desktop\WebSocket> nrm use npm 

   Registry has been set to: https://registry.npmjs.org/


PS C:\Users\link\Desktop\WebSocket> nrm ls    查询npm
* npm -------- https://registry.npmjs.org/       
  yarn ------- https://registry.yarnpkg.com/     
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/  
  nj --------- https://registry.nodejitsu.com/   
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/       

```

在切换回淘宝 ：`nrm use taobao`
```bash

PS C:\Users\link\Desktop\WebSocket> nrm use taobao

   Registry has been set to: https://registry.npm.taobao.org/
```

