---
title: fiddler怎么使用？
date: 2020-06-16
tags: 
- fiddler
- fiddler使用
categories: 
- 前端随笔
description: true
publish: true
---



### fiddler 怎么使用，怎么抓包，怎么手机抓包？

####  fiddler：

原理：服务器和浏览器之间通信内容 fiddler都能监听到，当打开fiddler的时候会设置一个系统代理端口8888

#### fiddler信息：

##### 菜单：

- **添加备注：**add commoent /  可能接口坏了，备注下接口损害的地方

- **Replay**：重新请求该链接

- All Processes：断点

- Stream： 流模式，       缓冲模式(接收到了服务器的传给浏览器)

- Decode：解码

- Keep：All sessions 保存多少条信息

- Any Process ： 打靶监听某个软件的请求和响应

- **Find：**查找所有网页中能看到的文字后 ，找到包含查找的信息后会变色

- Save： 保存saz格式文件

- Tearoff：分离面板

- Online：电脑ip信息

<hr ><hr >

#####  监控面板

- 抓取每条http请求(每条成为一个session)
- 主要包含了请求的ID编号、状态码、协议、主机名、URL、内容类型、body大小、进程信息、自定义备注等信息。
- 信息
  - \# 序号
  - Result ---- http响应的状态码
  - Protocol ---- 请求使用的协议 (http https ftp)
  - Host ---- 请求地址的域名
  - URL ---- 请求的服务器路径和文件名，也包括GET 参数
  - BODY ---- 请求的大小，以byte为单位
  - Caching ---- 请求的缓存过期时间或缓存控制header等值
  - Content-Type ---- 请求响应的类型 
  - Process ---- 发出此请求的 Windows 进程及进程ID
  - Comments ---- 用户通过脚本或者右键给此session增加的备注
  - Custom ---- 用户可以通过脚本设置的自定义值

<hr ><hr >

##### 状态栏
- Capturing 是否监听

<hr ><hr >

##### 辅助标签+工具

- Statistics 统计性能信息

  ```javascript
  Request Count:   1
  Bytes Sent:      360		(headers:360; body:0)
  Bytes Received:  640		(headers:532; body:108)
  
  ACTUAL PERFORMANCE
  --------------
  ClientConnected:	06:01:57.881
  ClientBeginRequest:	06:01:57.906
  GotRequestHeaders:	06:01:57.906
  ClientDoneRequest:	06:01:57.907
  Determine Gateway:	0ms
  DNS Lookup: 		27ms
  TCP/IP Connect:	32ms
  HTTPS Handshake:	0ms
  ServerConnected:	06:01:57.967
  FiddlerBeginRequest:	06:01:57.967
  ServerGotRequest:	06:01:57.967
  ServerBeginResponse:	06:01:58.032
  GotResponseHeaders:	06:01:58.032
  ServerDoneResponse:	06:01:58.032
  ClientBeginResponse:	06:01:58.032
  ClientDoneResponse:	06:01:58.032
  
  	Overall Elapsed:	0:00:00.125
  
  RESPONSE BYTES (by Content-Type)
  
  ```

- Inspectors

  - 请求信息分类

- **AutoResponder**

  - 使用Fiddler 的内置响应
  - 自定义响应
  - 重定向到本地的资源

  ```javascript
  模拟钓鱼网站：
	1. AutoResponder --- Enable rules 打钩 ---  Add Rule 点击 添加规则 --- 
 	2. 添加地址 Rule Editor 
   		在线地址(在线js文件)：https://account.sogou.com/static/api/sogou.js?t=2017110901
   		本地地址(修改后的本地js文件 )：C:\Users\link\Desktop\a.js
  ```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200326185646888.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)
<hr>

```javascript
  模拟返回的数据：
  1.http://test.lemonban.com/ningmengban/mvc/user/login.json   把请求的接口拖到AutoResponder里面去
  2.右键 Edit Response (F2)  
  3.选择Raw，编辑响应体里面的数据，后台返回给什么数据 统一被fiddler 自定义的数据给覆盖
  
  ```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200326190149936.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200326190236101.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)
<hr>

  ```javascript
  模拟请求网页返回图片：
  1.http://test.lemonban.com/ningmengban/app/login/login.html   把请求的接口拖到AutoResponder里面去
  2.下拉框选择 Find a file  ，选择图片
  3.清除缓存，刷新页面，请求的是登录页，显示的是图片
  
  ```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200326184940650.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)
- **Composer 设计请求**
  - 简单的接口测试工具，发包
  - 修改页面里的接口
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200327100246974.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)
  - 把接口拖到  Composer，修改请求的参数  点击Execute 
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200327100437960.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)
  - 接口测试：发现修改手机号后还能请求，明明手机号格式不正确。所以接口就有问题，需要后端做手机号验证
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200327100216473.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1ajE5MzU=,size_16,color_FFFFFF,t_70)
	```javscript
	1. 接口请求：http://test.lemonban.com/ningmengban/mvc/user/login.json  
	2. Composer--- Parsed --- 粘贴刚刚的请求接口，然后修改参数 --- 点击Execute
	3. 响应手机号未注册 (后台也要判断手机号是否符合条件，不然可能也是bug)
	 ```

<hr ><hr >

- **Filters** 过滤器

  - Use Filters  过滤

  - **Hosts  主机**

    - No Zone Filter 不过滤区域

      - Show only Intranet Hosts   仅仅过滤局域网
      - **Show only Internet Hosts  仅仅过滤因特网**

    - No Host Filter 不过滤主机

      - **Hide the following Hosts 隐藏以下主机**
      - **Show only the following Hosts 仅显示以下主机**
      - Flag the following Host 标记以下主机

  - Client Process 客户端进程

  - **Request Headers 请求头**

    - **Show only if URL contains  请求头包含XXX的url**  (例如：baiu.com)  
    - **Hide if URL contains  隐藏包含XXX的url ** (例如：baiu.com)
    - **Flag requests with headers 请求包含XXX的请求 (例如：no-cache)**
    - Delete request headers 删除请求头里面的XXX  (例如：Cookie)
    - **Set request header 请求都加上header**   (例如：token)

  - Breakpoints  断点

    - Break request on POST   POST请求设置断点
    - Break request on GET with query string 
    - Break on XMLHttpRequest  AJAX请求设置断点
    - Break response on Content-Type   当内容类型是某个类型的时候，设置断点

  - **Response Status Code**  响应状态 (过滤想要的请求，把不想要的响应过滤掉)

    - Hide success (2xx)  隐藏200开头的状态码  
    - hide non-2xx 
    - Hide redirects (300,301,302,303,307) 隐藏跳转的响应
    - Hide Authentication demands (401,407) 隐藏401,407的响应
    - Hide Not Modified (304)  隐藏重定向的响应

  - Response Type and Size 响应类型和大小

    - Hdie smaller than  隐藏小于
    - Hide larger than   隐藏大于
    - Block script files    让script 变成404  阻止脚本
    - Block image filers   让image 变成404  阻止图片
    - Block SWF files   让SWF 变成404  阻止SWF
    - Block CSS files   让CSS变成404  阻止CSS

  - Response Headers

    - Flag responses that setcookies 标记有cookie的响应
    - Flag responses with headers 标记响应包含了某个headers
    - Delete responseheaders 删除响应头
    - Set response header  设置响应头



- **Automatic Breakpoints 全局断点**
  - Before requests 请求前断点
    - 请求后：请求未给服务器，**可以修改请求的参数**
  - After Responses 响应后断点
    - 响应后：得到响应数据，未发给客户端，**可以修改响应的数据结果** 或者**模拟网络中断**
  - Disabled  不用打断点

- **局部断点 命令**
  - bpu login 请求包含login 的url 就会打断点
  - bpu 在此输入bpu， 取消断点
  - bpafter 响应后断点

- **弱网测试**

  - Rules --- Performance --- Simulate Modem Speeds  网络限速  **(修改具体限速后要选择)**

  - 具体限速 Rules --- Customize Rules 

    ```
    if (m_SimulateModem) {
    // Delay sends by 300ms per KB uploaded.   请求每kb延迟300ms
    oSession["request-trickle-delay"] = "300"; 
    // Delay receives by 150ms per KB downloaded.  响应每kb延迟150ms
    oSession["response-trickle-delay"] = "150"; 
    }
    ```

- Https抓包
  - Tools --- Options --- Decrypt HTTPS CONNECTs (解密HTTPS连接) 
  - Tools --- Options --- Actions --- Trust Root Certificate  安装 信任根证书

- 火狐设置证书
 	- Tools --- Options --- Actions  --- Export Root Certificate to Desktop 导出证书到桌面
 	- 打开火狐 --- 设置 --- 搜索’证书‘ --- 导入(刚刚导出的证书) --- 勾选三项 --- 确定 --重启浏览器


- App抓包 (**fiddler 手机抓包**) 
  - 如果需要投屏到电脑：ApowerMirror 

```javascript
App抓包 fiddler 手机抓包
- 手机和电脑连接同一个wifi --- 最好把手机wifi密码忘记一次 重新输入密码 同时设置代理  --- 显示高级选项 (打钩)--- 代理: 手动 --- 服务器主机名: 电脑ip --- 服务器端口: fiddler的端口 8888 --- IP DHCP 
- fiddler --- Tools --- Options --- Decrypt https traffic(打钩)
- fiddler --- Tools --- Options --- Connections --- Allow remote computers to connect

问题：打开抖音 不能正常播放视频
原因：未安装手机证书
解决：在手机浏览器输入：电脑ip:8888 --- FiddlerRoot certificate (点击下载证书)

安装手机证书：设置 --- 安全 --- 更多安全设置 --- 加密凭据 --- 从储存设备安装 --- 下载内容 --- Browser --- FiddlerRoot.cer --- 点击安装 --- 证书名称: (自定义) VPN和应用 --- 确定 

查看证书：设置 --- 安全 --- 更多安全设置 --- 加密凭据 --- 受信任的凭据 --- 用户

```



