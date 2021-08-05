---
title: 通过Promise.reject或抛出异常改变本次Promise状态
date: 2020-06-16
tags: 
- es6
- Promise
categories: 
- 前端随笔
description: true
publish: true
---


#### 通过 Promise.reject 或 抛出异常 改变本次Promise状态 ：

```javascript
    function Pro(val) {
        return new Promise((resolve, reject) => {
                resolve(val);
            }).then(value => {
                console.log(value);
                if (value !== '成功') {
                    // throw new Error('fail');
                    return Promise.reject('参数错误')
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    Pro(112233) 
	// 112233
	// 参数错误
```


```javascript
    new Promise((resolve, reject) => {
        resolve('中国人1');
    }).then(value => {
        if (value !== '成功') {
            // 成功状态，通过 Promise.reject 或 抛出异常 改变本次Promise状态
            // throw new Error('fial-----');
            return Promise.reject('参数错误')
        }
    }).catch(error => {
        console.log(error + '-------'); // 参数错误-------
    })
```
