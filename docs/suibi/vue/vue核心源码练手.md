---
title: vue核心源码 练手
date: 2020-06-16
tags: 
- vue核心源码
- vue
categories: 
- 前端随笔
description: true
publish: true
---

#### vue核心源码 练手
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020060704524911.png)

vue的双向绑定的原理：利用了 Object.defineProperty这个属性，把data里面的属性都定义了get、set，
让我们有机会去监听这些属性的变化，当这些属性变化了后，就去通知那些需要更新的地方去做更新。

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        class Kvue {
            constructor(options) {
                this.$options = options;
                // 数据响应化
                this.$data = options.data;
                this.observe(this.$data);
            };

            observe(value) { // data里面数据传进来

                if (!value || typeof value !== 'object') { // 没有 value 或者value不等于object
                    return
                };
                Object.keys(value).forEach(key => { // 遍历所有属性名
                    this.defineReactive(value, key, value[key]);
                })
            };

            defineReactive(obj, key, val) { //obj data数据，key 属性名，val 属性值
                this.observe(val); // 递归 解决数据的嵌套（如果属性 foo的值 是对象 还能遍历 继续递归遍历）
                Object.defineProperty(obj, key, {
                    get() {
                        return val // 返回属性值
                    },
                    set(newVal) {
                        if (newVal === val) return; // 如果新旧属性值相等 直接返回
                        val = newVal; // 新旧属性值不等，把新的属性值赋值给val 
                        console.log(`${key} 属性更新了：${val}`);
                    }
                })
            }

        };

        const app = new Kvue({
            data: {
                test: '我是一个test1',
                foo: {
                    bar: 'bar111'
                }
            }
        });
        app.$data.test = '早上好！！'
        app.$data.foo.bar = '晚安啊！！'
    </script>

</body>

</html>
```
