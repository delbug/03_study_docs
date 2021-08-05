---
title: 03-webapi
date: 2020-06-15
tags: 
- webapi
categories: 
- webapi
description: true
publish: true
---

# webAPI-day03

## 补充案例

京东侧边栏

```
// 1. 获取元素
// 1.1 获取一组li
// 1.2 获取一组类名为item的div
// 1.3 获取类名为slide的div

// 2. 循环遍历给每一个li注册onmouseenter，并且每一个li添加一个index表示索引
// 2.1 循环遍历把所有的li的类名设置为'',把所有的item的display设置为none
// 2.2 让当前的li突出显示（加类名active）
// 2.3 获取到当前的li的编号（加的索引）
// 2.4 通过编号找到对应的item项设置display为block

// 3. 给类名为slide的div鼠标离开事件onmouseleave
// 3.1 循环遍历把所有的li的类名设置为'',
```



## 自定义属性行内属性

> - 标签内所能操作的属性：
>   - 系统支持的：href、title、src....，可以通过元素直接调用【元素.属性】
>   - 自定义标签属性：bigSrc，不可以通过元素直接点的方式调用
>
> 

- 获取

  > - 语法：**元素.getAttribute(name);**

- 设置

  > - 语法：**元素.setAttribute(name,value);** 

- 移除

  > - 语法：**元素.removeAttribute(name);** 

- 代码：

  > ```html
  >   <!-- 系统支持：src ; 可以通过元素直接调用-->
  >   <!-- 自定义的标签属性：bigSrc；不可以通过元素直接点的方式调用 -->
  >   <img src="small.jpg" title="图片" bigSrc="big.jpg" >
  >   <script>
  >     var img = document.querySelector('img');
  >     console.log(img.src);
  >     console.log(img.bigSrc);  // undefined
  >     // 获取
  >     var v = img.getAttribute('bigSrc');
  >     console.log(v);
  >     // 设置
  >     img.setAttribute('bigSrc','100086.jpg');
  >     // 移除
  >     img.removeAttribute('bigSrc');
  > 
  >     // 注意：set/get/removeAttribute不仅可以操作自定义标签属性，还可以操作系统支持标签属性。
  >     var v = img.getAttribute('src');
  >     console.log(v);
  >   </script>
  > ```





## 4. 节点的层级

根据节点的关系来获取元素

- 节点的关系

  - 父子关系
  - 兄弟关系

- 根据子节点获取父节点

  > - 语法：**子节点.parentNode** 

- 根据父节点获取子节点

  > - 语法：**父节点.childNodes;**   获取的子节点包含文本和元素
  > - 语法：**父元素.children;**        获取的子节点仅仅包含元素
  > - 语法：**父节点.firstElementChild;**    获取第一个子元素节点
  > - 语法：**父节点.lastElementChild;**     获取最后一个元素节点

- 节点的nodeType、nodeName、nodeValue的属性

  - 节点的nodeType属性的作用：元素→ 1；  文本→3【nodeType：节点类型】
  - 节点的nodeName属性的作用：元素→ 大写的标签名  文本→ `#text` 【nodeName：节点名称】
  - 节点的nodeValue属性的作用：元素→ null       文本→ 文本的内容【nodeValue：节点值】

- 获取兄弟节点

  > - 获取下一个兄弟
  >   - 语法：**节点.nextElementSibling** 
  > - 获取上一个兄弟
  >   - 语法：**节点.previousElementSibling** 



## 核心知识点

+ 动态创建元素
+ 动态追加元素
+ 动态删除元素


## 1. 动态创建元素

+ **通过innerHTML创建元素** 

  > + 语法：**元素.innerHTML = '内容';** 
  > + 代码：
  >
  >   ```html
  >     <button>创建li</button>
  >     <ul>
  >       <li>我是li</li>
  >     </ul>
  >     <script>
  >       var btn = document.querySelector('button');
  >       var ul = document.querySelector('ul');
  >       btn.onclick = function() {
  >         // 获取ul中原有的内容
  >         var str = ul.innerHTML;
  >         // 设置ul的内容
  >         ul.innerHTML =str + '<li>我是新来的</li>';
  >       };
  >     </script>
  >   ```

+ **通过document.createElement创建元素** 

  > + 语法：**document.createElement(‘标签名’);**   返回一个新的元素对象
  > + 代码：
  >
  >   ```html
  >     <button>创建li</button>
  >     <ul>
  >       <li>我是li</li>
  >     </ul>
  >     <script>
  >       var btn = document.querySelector('button');
  >       var ul = document.querySelector('ul');
  >       btn.onclick = function() {
  >         // 创建一个新的li元素
  >         var newLi = document.createElement('li');
  >         // 追加到ul中
  >         ul.appendChild(newLi);
  >         // 设置元素的内容
  >         newLi.innerText = '我是新来的';
  >       };
  >     </script>
  >   ```

+ **性能测试** 

  > - innerHTML在追加多个元素时执行速度慢，性能差。不推荐使用
  > - createElement方法执行速度快，**性能高** ，在实际开发中**推荐使用** 。

  



## 2. 动态追加元素

+ 语法：**父元素.appendChild(子元素);** 
+ 代码：

  > ```html
  >   <button>创建li</button>
  >   <ul>
  >     <li>我是li</li>
  >   </ul>
  >   <script>
  >     var btn = document.querySelector('button');
  >     var ul = document.querySelector('ul');
  >     btn.onclick = function() {
  >       // 创建一个新的li元素
  >       var newLi = document.createElement('li');
  >       // 追加到ul中
  >       ul.appendChild(newLi);
  >       // 设置元素的内容
  >       newLi.innerText = '我是新来的';
  >     };
  >   </script>
  > ```



## 3. 动态删除元素

+ 语法：**父元素.removeChild(子元素);** 
+ 代码：
  



## 4. 其他操作

### 4.1 插入元素

+ 语法：**父节点.insertBefore(新的节点,旧的子节点)** 
+ 代码：



### 4.2 替换元素

+ 语法：**父节点.replaceChild(新的节点,旧的子节点)** 
+ 代码：


### 4.3 克隆元素

+ 语法：元素.cloneNode(true或false);  返回一份新的克隆后的元素
+ 代码：



## 案例

1. 根据数组动态创建英雄(ul)列表【获取元素，添加事件，添加元素和属性】
2. 根据数据动态生成表格【获取元素，创建元素，追加元素】
3. 表格封装(封装一个函数，传入数据生成表格)
4. 微博发布
5. 权限选择



