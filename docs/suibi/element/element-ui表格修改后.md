---
title: element-ui表格修改后,表格里面的数据后,页面不实时更新问题,完美解决
date: 2020-06-16
tags: 
- element
categories: 
- 前端随笔
description: true
publish: true
---


# element-ui 表格 修改后 表格里面的数据后 页面不实时更新问题  完美解

- 想要达到的效果：点击"更多"后，"更多"隐藏，删除和补仓显示；（有时间可全部看完，**没时间直接看做法5**）
- 尝试用的方法：自己用 this.show、在百度上找的方法 set 都没能成功
- 提示：最下面有代码demo  
> #### 页面初始化：
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200509182918447.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)
> #### 目标效果
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200509182934325.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)
## 做法1：

> 给"更多"绑定一个 `v-show='show'`  把 `this.show` 设置为true ，点击"更多"按钮后 在点击事件里面把`this.show` 设置为false；
>
> ##### 结果1：
>
> > 未成功，点击一个"更多"，其他所有的"更多"都隐藏起来了
>
> ##### 原因1：
>
> > 循环的时候show给了表格所有的行，所以点击一个"更多"导致所有的"更多"都隐藏了；


## 做法2：

> 给"更多"绑定一个`v-show='(scope.$index+1)' `，理想状态是：索引最低是0，+1后，至少也为1,所以显示，给删除和补仓设置为 `v-show='!(scope.$index+1)' ` 取反就是隐藏了；
>
> ##### 结果2：
>
> > 未成功，报错


## 做法3：

> 当取到表格的data数据后，循环给数据一个flag =true ，在赋值给表格，点击"更多"后把当前的行索引拿到 ，把当前行的 `this.tables[index].flag = false`设置为false；
>
> ##### 结果3
>
> > 未成功，点击第一个 "更多"可以 隐藏"更多"，显示 删除、补仓， 出现问题：在点击其他行的"更多"就不能正常显示和隐藏，还是有问题


## 做法4：

> 百度到的结果：用set方法，当取到表格的data数据后，循环给数据一个flag =true ，在赋值给表格，点击"更多"后把当前的行索引拿到 ，把当前行的 `this.tables[index].flag = false`设置为false； 并 设置：`this.$set(this.tables);`
>
> ##### 结果4
>
> > 未成功，结果是点击第一个"更多"可以改变，点击其他的"更多"还是改变不了；



## 做法5：

> 把当前行的 `this.tables[index].flag = false`设置为false；然后在把 表格的数据 用 ` JSON` `this.tables = JSON.parse(JSON.stringify(this.tables)); `  值重新克隆一遍 再赋值给表格就OK了
>
> ##### 结果5：
>
> > 成功(有缺陷)， 如果只有 new Date的话 转化就会有问题

#### 做法5的缺陷：
 如果有 new Date的话，转化就会有问题 **(会把new Date转化成 字符串)**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200515144910674.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)

## 做法6：
> 使用 ` JSON.parse(JSON.stringify(this.tables))` 也可行，但是怎么能止步于此呢，赋值给tables表格的原理是深拷贝，那么我还能这样  `this.tables = this.tables.filter(item => item);` ，把每一项重新 复赋值给  `this.tales` ；
>##### 结果
>> 成功， 所有的表格项可以正常隐藏 和显示

**做法6 完美解决了缺陷**![在这里插入图片描述](https://img-blog.csdnimg.cn/20200515145234441.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)

## 做法7：  Object.assign
> 直接使用es6的 Object.assign复制一个新的对象  ` this.tables = Object.assign([],this.tables)` 少去了过滤循环的麻烦 简单明了
>##### 结果
>> 成功， 所有的表格项可以正常隐藏 和显示

### 以下demo代码可复制到新的vue文件里面直接查看，然后点击查看效果 

```javascript

<template>
    <div>
    
        <hr />
        <el-button @click="showTable">显示表格</el-button>
        <el-table :data.sync="tables" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
              <el-button type="info" size="small">编辑</el-button>
              <el-button
                type="primary"
                size="small"
                v-show="scope.row.flag"
                @click="more(scope.$index,scope.row)"
              >更多</el-button>
              <div v-show="!scope.row.flag">
                <el-button type="danger" size="small">删除</el-button>
                <el-button type="success" size="small">补仓</el-button>
              </div>
</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tables: [],
            getList: [{
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄111",
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄222",
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄333",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄444",
                }
            ]
        };
    },
    watch: {},
    methods: {
        showTable() {
            // this.getList 表示请求到的数据
            // this.tables 表格 data
            if (this.getList.length > 0) {
                this.getList.forEach(val => {
                    val.flag = true;
                });
            }
            this.tables = this.getList;
        },
        more(index, val) {
            console.log("更多", index, val);
            this.tables[index].flag = false;
            // this.tables = JSON.parse(JSON.stringify(this.tables)); // 如果不转化 页面不生效
            this.tables = Object.assign([],this.tables) // 赋值一个新的对象
            // this.tables = this.tables.filter(item => item);
            console.log("转化之后", this.tables);
        }
    }
};
</script>


```

