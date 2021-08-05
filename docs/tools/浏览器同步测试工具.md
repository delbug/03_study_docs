---
# navbar: false
title: 浏览器同步测试工具
date: 2020-06-15
sidebar: 'auto'
categories:
 - 工具
tags:
 - 工具
description: true
publish: true
---

:::tip
省时的浏览器同步测试工具
:::
<!-- more -->

### Node.js 的全局工具演示 ###

目的：演示基于 Node.js 开发的工具

github 世界上最大的开(同)源(性)社区(源代码托管)

- [http-server](https://github.com/indexzero/http-server)

  - 一个简单的零配置的 HTTP 服务器 (用于开发环境)

  - 安装

    ```bash
    npm install http-server -g
    ```

  - 使用

    ```bash
    http-server
    hs 
    ```

- [brower-sync](http://www.browsersync.cn/)

  - 省时的浏览器同步测试工具

  - 安装

    ```bash
    npm install -g browser-sync
    ```

  - 使用

    ```bash
    # ** 代表任意目录，任意目录下的 css 或者 html 变化
    browser-sync start --server --files "**/*.css, **/*.html, *.html"
    ```