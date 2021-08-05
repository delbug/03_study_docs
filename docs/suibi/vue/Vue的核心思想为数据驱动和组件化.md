---
title: Vue的核心思想为数据驱动和组件化
date: 2020-06-16
tags: 
- vue
- vue思想
categories: 
- 前端随笔
description: true
publish: true
---

Vue的核心思想为数据驱动和组件化。

一、数据驱动——双向绑定

Vue是一种MVVM框架。而DOM是数据的一个种自然映射。传统的模式是通过Ajax请求从model请求数据，然后手动的触发DOM传入数据修改页面。Vue中，Directives对view进行了封装，当model里的数据发生变化是，Vue就会通过Directives指令去修改DOM。同时也通过DOM Listener实现对视图view的监听，当DOM改变时，就会被监听到，实现model的改变，实现数据的双向绑定。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200503184731627.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)


二、组件化

组件化实现了扩展HTML元素，封装可用的代码。页面上每个独立的可视/可交互区域视为一个组件；每个组件对应一个工程目录，组件所需要的各种资源在这个目录下就近维护；页面不过是组件的容器，组件可以嵌套自由组合形成完整的页面。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200503184836149.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)

<hr>

Vue.js是一个提供MVVM数据双向绑定的库，专注于UI层面，核心思想是：数据驱动、组件系统。

**1.数据驱动：**

Vue.js数据观测原理在技术实现上，利用的是ES5Object.defineProperty和存储器属性: getter和setter（所以只兼容IE9及以上版本），可称为基于依赖收集的观测机制。核心是VM，即ViewModel，保证数据和视图的一致性。

watcher：每一个指令都会有一个对应的用来观测数据的对象，叫做watcher，比如v-text="msg", {{ msg }}，即为两个watcher，watcher对象中包含了待渲染的关联DOM元素。

```bash
<div id="app">
  {{ message }}
</div>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
基于依赖收集的观测机制原理：
>将原生的数据改造成 “可观察对象”，通常为，调用defineProperty改变data对象中数据为存储器属性。一个可观察对象可以被取值getter，也可以被赋值setter。
在解析模板，也就是在watcher的求值过程中，每一个被取值的可观察对象都会将当前的watcher注册为自己的一个订阅者，并成为当前watcher的一个依赖。
当一个被依赖的可观察对象被赋值时，它会通知notify所有订阅自己的watcher重新求值，并触发相应的更新，即watcher对象中关联的DOM改变渲染。

依赖收集的优点在于可以精确、主动地追踪数据的变化，不需要手动触发或对作用域中所有watcher都求值（angular脏检查实现方式的缺点）。特殊的是，对于数组，需要通过包裹数组的可变方法（比如push）来监听数组的变化。在添加/删除属性，或是修改数组特定位置元素时，也需要调用特定的函数，如obj.$add(key, value)才能触发更新。这是受ES5的语言特性所限。

**2.组件化：**

应用类UI可以看作全部是由组件树构成的。

注册一个组件：

```bash

Vue.component('my-component', {
    // 模板
    template: '<div>{{msg}} {{privateMsg}}</div>',
    // 接受参数
    props: {
        msg: String    
    },
    // 私有数据，需要在函数中返回以避免多个实例共享一个对象
    data: function () {
        return {
            privateMsg: 'component!'
        }
    }
})
<my-component msg="hello"></my-component>

```

组件的核心选项：
>模板（template）：模板声明了数据和最终展现给用户的DOM之间的映射关系。
初始数据（data）：一个组件的初始数据状态。对于可复用的组件来说，这通常是私有的状态。
接受的外部参数(props)：组件之间通过参数来进行数据的传递和共享。
方法（methods）：对数据的改动操作一般都在组件的方法内进行。
生命周期钩子函数（lifecycle hooks）：一个组件会触发多个生命周期钩子函数，最新2.0版本对于生命周期函数名称改动很大。
私有资源（assets）：Vue.js当中将用户自定义的指令、过滤器、组件等统称为资源。一个组件可以声明自己的私有资源。私有资源只有该组件和它的子组件可以调用。

Webpack是一个开源的前端模块构建工具，它提供了强大的loader API来定义对不同文件格式的预处理逻辑，这是.vue后缀单文件组件形式的基础。所以在此基础上，尤大开发的vue-loader允许将模板、样式、逻辑三要素整合在同一个文件中，以.vue文件后缀形成单文件组件格式，方便项目架构和开发引用。

**其他特性：**

>1.异步批量DOM更新：当大量数据变动时，所有受到影响的watcher会被推送到一个队列中，并且每个watcher只会推进队列一次。这个队列会在进程的下一个 tick异步执行。这个机制可以避免同一个数据多次变动产生的多余DOM操作，也可以保证所有的DOM写操作在一起执行，避免DOM读写切换可能导致的layout。
>2.动画系统：Vue.js提供了简单却强大的动画系统，当一个元素的可见性变化时，用户不仅可以很简单地定义对应的CSS Transition或Animation效果，还可以利用丰富的JavaScript钩子函数进行更底层的动画处理。
可扩展性：除了自定义指令、过滤器和组件，Vue.js还提供了灵活的mixin机制，让用户可以在多个组件中复用共同的特性。

**总结：**

Vuejs学习曲线非常平缓，主要是文档实在太优秀了，旁证了设计师出身的程序员有多可怕。其轻量、高性能的特点，对于移动场景也有很好的契合。更重要的是，设计完备的组件系统和配套的构建工具、插件，使得Vue.js在保留了其简洁API的同时，也已经完全有能力担当起复杂的大型应用的开发。

