---
title: Math.random 计算 取值范围公式
date: 2020-06-16
tags: 
- Math.random
- js基础

categories: 
- 前端随笔
description: true
publish: true
---


##### 计算 Math.random 范围公式： (高数-低数+1) + 低数   (包含高数)
```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        /* 计算random 范围公式： (高数-低数+1) + 低数   (包含高数)*/

        // 10 到21随机数 21-10 =11
        var num = Math.floor(Math.random() * (21 - 10 + 1) + 10)
        console.log('10 到21: ', num);

        // 24 到33 随机数
        var num1 = Math.floor(Math.random() * (33 - 24 + 1) + 24)
        console.log('24 到33: ', num1);

        // 18 到40之间的随机数
        var num2 = Math.floor(Math.random() * (40 - 18 + 1) + 18)
        console.log('18 到40: ', num2);

        // 109 到199之间的随机数
        var num3 = Math.floor(Math.random() * (199 - 109 + 1) + 109)
        console.log('109 到199: ', num3);
    </script>
</body>

</html>
```