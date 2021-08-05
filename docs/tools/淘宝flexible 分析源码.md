---
# navbar: false
title: 淘宝flexible 分析源码
# date: 2020-06-16
sidebar: 'auto'
categories:
 - 工具
 - 前端随笔
tags:
 - 工具
 - flexible 
 - 适配
description: true
publish: true
---


淘宝flexible 分析源码

```javascript

// 立即执行函数 (function() {})() 或者 (function() {} ())
// 主要作用：创建一个独立的作用域，里面所有的变量都是局部变量，避免了命名冲突问题
// 立即执行函数不需要调用，立马能够自己执行
(function flexible(window, document) {
    // 获取html的根元素
    var docEl = document.documentElement
        // dpr 是物理像素比
    var dpr = window.devicePixelRatio || 1

    // adjust body font size 设置body的字体大小
    function setBodyFontSize() {
        // 如果页面中有body这个元素，就设置body的字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果页面中没有body这个元素，则等着页面的主要DOM元素加载完毕再去设置body的字体大小
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10  设置html元素的文字大小
    function setRemUnit() {
        // var rem = docEl.clientWidth / 10
        // 屏幕1920px 分成10份，每份 192px ，但是我想分成24份 每份80px , 1rem = 80px 
        var rem = docEl.clientWidth / 24
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize  当页面尺寸大小发生变化的时候，要重新设置下rem的大小
    window.addEventListener('resize', setRemUnit)
        // pageshow 是重新加载页面触发的事件
    window.addEventListener('pageshow', function(e) {
        // e.persisted 返回的是true，就是说如果这个页面是从缓存取过来的页面，也需要重新计算一下rem的大小
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports  有些移动端的浏览器不支持0.5像素的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document));

```

注意：

立即执行函数  (function() {})()  或者 (function(){}()) 
主要作用： 创建一个独立的作用域。 避免了命名冲突问题 

下面三种情况都会刷新页面都会触发 load 事件。 

a标签的超链接 
F5或者刷新按钮（强制刷新） 
前进后退按钮 

### px 自动转换rem 插件
#####  下载vscode 插件 cssrem 
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200612030310832.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)
##### 设置 cssrem --> 点击设置-->扩展设置-->  80

>就会自动把 px 转化成rem了

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020061203072213.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)