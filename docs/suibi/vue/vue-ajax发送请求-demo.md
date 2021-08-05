---
title: vue-ajax发送请求-demo
date: 2020-06-16
tags: 
- Axios
- vue
categories: 
- 前端随笔
description: true
publish: true
---


![在这里插入图片描述](https://img-blog.csdnimg.cn/2019111016093174.png)

### index.html

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>留言板</title>
  <link rel="stylesheet" href="https://unpkg.com/bootstrap@4.1.3/dist/css/bootstrap.css">
</head>

<body>
  <div class="container">
    <h1 class="display-1">留言板</h1>
    <hr>
    <!-- <div id="loading">正在拼命加载数据.....</div> -->
    <ul id="messages" class="list-unstyled">

    </ul>
    <hr>
    <div class="form-group">
      <label for="txt_name">称呼：</label>
      <input class="form-control" id="txt_name" name="xxx" type="text">
    </div>
    <div class="form-group">
      <label for="txt_content">留言：</label>
      <textarea class="form-control" id="txt_content" cols="80" rows="10"></textarea>
    </div>
    <button type="button" id="btn_send" class="btn btn-primary">提交</button>
  </div>
  <script src="/lib/template-web.js"></script>
  <script src="/lib/jquery-3.3.1.js"></script>

  <!-- 渲染模板 -->
  <script id="tpl" type="text/html">
    {{each msgs}}
    <li class="media">
      <img class="mr-3" src="avatar.png" alt="{{$value.name}}">
      <div class="media-body">
        <h4>{{ $value.name }}</h4>
        <p>{{ $value.content }} </p>
      </div>
    </li>
    {{/each}}
  </script>

  <script>
    // 1. 留言列表 
    // 1.1 发送请求，获取数据 
    function loadData() {
      $.ajax({
        type: 'get',
        url: '/api/list',
        success: function (data) {
          var list = template('tpl', {
            msgs: data
          })
          $('#messasges').html(list);
        }
      });
    };

    // 2. 发表留言
    // 2.1 给按钮注册事件
    $('#btn_send').click(function () {
      // 2.2 获取用户输入的数据
      var name = $('#txt_name').val();
      var content = $('#txt_content').val();
      // 判断用户是否输入。。。。

      // 2.3 把用户输入的数据，发送给服务器
      $.ajax({
        type: 'post',
        url: '/api/add',
        // 设置请求体
        data: {
          name: name,
          content: content
        },
        success: function (data) {
          // 2.4 接收服务器返回的结果
          // data --> ok  error
          // 2.5 判断返回的结果，添加成功还是失败
          if (data === 'ok') {
            // 发表成功
            loadData();
            // 清空文本框。。。
            $('#txt_name').val('');
          } else {
            // 发表失败
            alert('发表失败');
          }
        }
      });
    });
  </script>

</body>

</html>
```
