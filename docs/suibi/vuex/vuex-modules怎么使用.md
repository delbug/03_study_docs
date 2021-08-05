---
title: vuex-modules怎么使用？
date: 2020-06-16
tags: 
- vuex
- vuex-modules
categories: 
- 前端随笔
description: true
publish: true
---


## vuex modules 怎么使用？
----

目录结构：
a.js  vuex 模块
b.js  vuex 模块
index.js  vuex
v.vue 结果内容显示
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020060702371687.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)

----

src\store\modules\index.js
```javascript
import Vue from 'vue';
import Vuex from 'vuex';
import numbers from './a'
import count from './b'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        count,
        numbers
    }
})
```
---
src\store\modules\a.js
```javascript
const state = {
    numbers: 11
}
const mutations = {
    add(state) {
        state.numbers++
    },
    minus(state) {
        state.numbers--
    }
}
const actions = {
    add: ({ commit }) => {
        commit('add')
    },
    minus: ({ commit }) => {
        commit("minus")
    }
}
export default {
    namespaced: true, // 开启命名空间
    state,
    mutations,
    actions
}
```
---
src\store\modules\b.js

```javascript
const state = {
    count: 1
}
const mutations = {
    add(state) {
        state.count++
    },
    minus(state) {
        state.count--
    }
}
const actions = {
    add: ({ commit }) => {
        commit('add')
    },
    minus: ({ commit }) => {
        commit("minus")
    }
}
export default {
    namespaced: true, // 开启命名空间
    state,
    mutations,
    actions
}
```
----
src\components\v.vue
```javascript
<template>
  <div>
    <h2>modules vuex内容</h2>
    <h3>
      {{$store.state.count.count}}
      {{$store.state.numbers.numbers}}
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
```
---
### 效果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020060702381911.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)