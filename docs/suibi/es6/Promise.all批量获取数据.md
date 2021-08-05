---
title: Promise.all 批量获取数据
date: 2020-06-16
tags: 
- es6
- Promise
categories: 
- 前端随笔
description: true
publish: true
---

#### Promise.all 批量获取数据 ：

```javascript
    const hdcms = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('第一个异步');
            reject('第一个异步错误。。。')
        }, 1000);
    }).catch(error => {
        console.log(3333333333);
    })

    const zhongguo = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('第二个异步');
        }, 1000);
    });

    Promise.all([hdcms, zhongguo]).then(result => {
        console.log('1111111', result);
    }).catch(error => {
        console.log('222222', error);
    })
    // 3333333333
    // 1111111 (2) [undefined, "第二个异步"]
    
```

#### Promise.all 封装 批量获取数据

```javascript
    function getUser(names) {
        let promises = names.map(name => {
           	// return  ajax(`http://localhost:8888/php/user.php?name=${name}`)
            return {
                // ajax  请求得到数据
                status: 200,
                data: {
                    age: 10,
                    age: 11
                }
            }
        });
        return Promise.all(promises)
    }

    getUser(['中国', '湖北']).then(users => {
            console.log(users);
        })
        // (2) [{…}, {…}]
```
