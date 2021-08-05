---
title: vue路由router-routhis.$route.params获取值和get请求this.$route.query
date: 2020-06-16
tags: 
- vue-router 
categories: 
- 前端随笔
description: true
publish: true
---

### vue 路由 router routhis.\$route.params 获取值 和 get 请求 this.\$route.query
<hr><hr>

### this.$route.params 获取值
````
News.vue ---------------

<template>
  <div id="news">
    <div v-for="(item,index) in list" :key="index">
      <router-link :to="'/content/'+index">{{item}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["11111", "22222", "33333"],
    };
  },
};
</script>


router.js ---------------

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import content from './components/content.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/content/:aid',
      name: 'content',
      component: content
    }
  ]
})


content.vue ---------------

<template>
</template>

<script>
export default {
  data() { },
  mounted() {
    console.log(this.$route.params);// http://localhost:8081/content/1
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>
````

### get 请求 this.$route.query 

````
Home.vue ------------
<template>
  <div class="home">
    <div v-for="(item,index) in list" :key="index">
      <router-link :to="'/pcontnet?id='+ index">{{item}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      list: ["sp11111", "sp22222", "sp33333"],
    };
   },
  }
};
</script>



router.js ------------
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import pcontnet from './components/pcontnet.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pcontnet', //不需要写:id
      name: 'pcontnet',
      component: pcontnet
    }
  ]
})



pcontnet.vue ------------
<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.query); //获取url地址栏的值 http://localhost:8081/pcontnet?id=1
  }
};
</script>

<style lang="scss" scoped>
</style>

````



