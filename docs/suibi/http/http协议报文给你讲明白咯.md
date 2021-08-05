---
title: http协议报文给你讲明白咯
date: 2020-06-16
tags: 
- http协议
- http
categories: 
- 前端随笔
description: true
publish: true
---


##### http协议：

- 超文本传输协议，从万维网传输资源到本地浏览器的传送协议，
- http协议基于应用层协议主要用来规定客户端和服务端的数据传输格式，最初用来向客户端传输html页面的内容，默认端口是80
- http是基于请求和响应模式的、无状态的、应用层的协议



##### http请求报文

- 请求行
  - GET http://test.lemonban.com/ningmengban/app/login/login.html HTTP/1.1 
    - 请求资源的方法     请求资源的地址(统一资源定位符)     http协议 版本号
- 请求头
  - Host: test.lemonban.com     //域名 
  - Accept: application/json     //浏览器告诉服务器，浏览器接收什么：服务器给浏览器传 json格式的字符串
  - Cache-Control     //缓存机制，如：Cache-Control：no-cache 不缓存
  - Content-Length: 62    //请求数据长度
  - Content-Type: application/x-www-form-urlencoded; charset=UTF-8   //告诉服务器：浏览器给服务器发的是什么格式：表单的格式，utf8编码
  - User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko)    //系统浏览器和版本的说明
  - Referer: http://test.lemonban.com/ningmengban/app/login/login.html   //从那个页面上发起的请求
  - Accept-Language: zh-CN,zh;q=0.9    //浏览器接收的语言是中文
  - Accept-Encoding: gzip, deflate  //浏览器接收gzip压缩
  - Referer: http://test.lemonban.com/ningmengban/app/login/login.html    ////从哪个链接访问的，防止盗链，可统计一个请求来自哪个页面
- 空一行
- 请求正文(请求体)

##### http响应报文

- 状态行
  - HTTP/1.1 200 OK    //协议版本 状态码  原因描述
    - 状态码： 服务器HTTP响应状态的3位数字代码
      - 1XX 提示信息，请求被成功接收
      - 2XX  成功，请求被成功处理 200
      - 3XX 重定向相关304  请求的页面未改变
      - 4XX 客户端错误404
      - 5XX 服务器错误 500
- 响应头
  - Server: nginx/1.12.0  //服务器类型，及软件信息
  - Date: Tue, 24 Mar 2020 10:44:56 GMT   //响应报文时间
  - Expires:  //指定缓存过期时间
  - Content-Length: 62    //响应数据长度
  - Content-Type: application/json;charset=UTF-8   //服务器响应浏览器 内容类型字符集
  - Last-Modified:  //本地资源最后修改时间,(如果本地资源未修改 不发送请求304)
  - Transfer-Encoding: chunked  //
  - Location:    //指定 重定向的位置，新的URL地址，如304的情况
  - Connection: keep-alive   //保持tcp连接不关闭，不会永久保存连接，服务器可设置
  - Set-Cookie: JSESSIONID=4FCBDC0840A9DA1328C4DBDD27871043; Path=/ningmengban  //服务器给浏览器 cookie，浏览器设置cookie，下次请求服务器知道浏览器有没有登录路过
  - 空行
  
- 响应体
  - 响应数据



##### 请求方法

- GET 请求资源
- POST 提交资源
- HEAD 获取响应头
- PUT 替换资源
- DELETEE 删除资源
- OPTIONS 允许客户端查看服务器的性能
- TRACE 回显服务器收到的请求，用于测试或诊断

##### URL   (Uniform Resource Locator:统一资源定位符 )

- ###### https://www.baidu.com/s?wd='query-string' 

- ###### scheme://host:prot/搜索接口?搜索参数='query-string'

- scheme：协议：http、https、ftp

- host：域名或ip地址

- port：端口

- path：资源路径 

- query-string：发送的参数 ：  https://www.baidu.com/s?wd='参数'

<hr>
<hr>
<hr>

#### get请求报文

```javascript
// 请求行
GET http://test.lemonban.com/ningmengban/app/login/login.html HTTP/1.1  

// 请求头部
Host: test.lemonban.com
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate //浏览器接收gzip压缩
Accept-Language: zh-CN,zh;q=0.9 //浏览器接收语言

// 空一行 
空一行 

//请求体
空一行    // 注意：get请求没有请求体，post、put请求有请求体

```



#### get响应报文

```javascript

HTTP/1.1 200 OK
Server: nginx/1.12.0
Date: Tue, 24 Mar 2020 10:36:02 GMT
Content-Type: text/html;charset=UTF-8
Content-Length: 5431
Connection: keep-alive
Accept-Ranges: bytes
ETag: W/"5431-1560931664000"
Last-Modified: Wed, 19 Jun 2019 08:07:44 GMT

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<link href="../../css/main.css" type="text/css" rel="stylesheet" />
<link href="../../css/style2.css" type="text/css" rel="stylesheet" />
<link rel="stylesheet" type="text/css"
	href="../../css/framework/validationEngine.jquery.css" />
<link href="../../css/logsign.css" type="text/css" rel="stylesheet" />
<script src="../../js/jquery.js" type="text/javascript"></script>
<script src="../../js/banner.js" type="text/javascript"></script>
<script src="../../js/common.js" type="text/javascript"></script>
<script type="text/javascript" src="../../js/framework/jquery.md5.js"
	charset="UTF-8"></script>
<script type="text/javascript"
	src="../../js/framework/jquery.validationEngine-zh_CN.js"></script>
<script type="text/javascript"
	src="../../js/framework/jquery.validationEngine.js"></script>
<script type="text/javascript" src="../../js/framework/sea.js"></script>
<script src="../../js/framework/jquery.cookie.js" type="text/javascript"></script>
<script language="JavaScript">
	seajs.use("../../js/login/login", function(loginUtis) {
		loginUtis.init();
	});
</script>
<style type="text/css">
.onShow {
	background-position: 3px -147px;
	border-color: #40B3FF;
	color: #959595
}

.onFocus {
	background-position: 3px -147px;
	border-color: #40B3FF;
}

.onError {
	background-position: 3px -47px;
	border-color: #40B3FF;
	color: red
}

.onCorrect {
	background-position: 3px -247px;
	border-color: #40B3FF;
}

.onLamp {
	background-position: 3px -200px
}

.onTime {
	background-position: 3px -1356px
}

.form-control {
	margin-bottom: 10px;
}
</style>
</head>
<body>
	<div class="login-wrap clearfix">
		<div class="login-content clearfix">
			<div class="login-left">
				<div
					style="padding-bottom: 20px; display: flex; justify-content: center; align-items: center;">
					<img src="../../images/logo.png" alt="" />
				</div>
				<div class="login-title">
					<h2>欢迎回来</h2>
					<span>还没有帐号？<a href="../register/register.html">立即注册</a></span>
				</div>
				<div class="form-conttrols">

					<form method="post" action="" id="myform"
						enctype="application/x-www-form-urlencoded">
						<div class="form-control">
							<input type="text" name="username" id="username"
								class="ipt ipt-email validate[required]" data-validate="phones"
								placeholder="请输入登录手机号" />
						</div>
						<div class="form-control">
							<input type="password" name="password" id="password"
								class="ipt ipt-pwd validate[required]" placeholder="请输入登录密码" />
						</div>
						<div class="form-control clearfix">
							<label for="autologin" class="autologin"><input
								type="checkbox" name="cookietime" value="2592000"
								id="cookietime" />&nbsp;记住我</label> <a href="#" class="forget-pwd">忘记密码？点击找回</a>
	
						</div>
						<div class="form-control clearfix">
							<p class="tips"></p>
							<input type="button" name="dosubmit" id="login-button"
								data-fromurl="space/index" value="登录"
								class="btn btn-blue login-submit btn-block " />
						</div>
	
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<footer id="footer"> <section class="container">
	<div class="b-foot">
		<section class="fl col-80 mt20"> <section class="mr20">
		<section class="b-f-link mt20"> <a href="/front/helpCenter"
			title="帮助中心" target="_blank">帮助中心</a>| <a
			href="/front/helpCenter?id=194" title="联系我们" target="_blank">联系我们</a>|
		<a href="/front/helpCenter?id=193" title="关于我们" target="_blank">关于我们</a>|
		<span>服务热线：0731-85818965</span> <span>Email：serivce@lemonban.com</span>
		<span class="ml30">
			<div class="c-666 f-fM vam">
				柠檬班交流群： <a target="_blank"
					href="//shang.qq.com/wpa/qunwpa?idkey=6a5d9650bd405064e00eba58e29d0fa9cf2ca6df94920de201f03a28c5afe8bb"><img
					border="0" src="//pub.idqqimg.com/wpa/images/group.png"
					alt="柠檬班软件测试交流群" title="柠檬班软件测试交流群"> ①646693549 </a> <a
					target="_blank"
					href="//shang.qq.com/wpa/qunwpa?idkey=e51ac4f87446a4780183a2d864891ffea3cd1fa9e638ba440b32e6904201c437"><img
					border="0" src="//pub.idqqimg.com/wpa/images/group.png"
					alt="柠檬班软件测试学习" title="柠檬班软件测试学习"> ②561662723 </a>
			</div>
		</span> </section> <section class="b-f-link mt10"> <span>Copyright
			©2015-2019 版权所有 湖南省零檬信息技术有限公司 湘ICP备17007107号-2</span> <span class="c-666">Powered
			by<a title="柠檬班" target="_blank" href="http://www.lemonban.com"
			class="c-666">柠檬班</a>
		</span> </section> </section> </section>
		<aside class="fl col-20 tar ewm-box"> <span class="disIb tac">
			<img
			src="http://www.lemonban.com/images/upload/online/20161213/1481617339900.jpg"
			alt="" class="dis" width="140" height="140">
				<p class="hLh30 fsize14 c-999 f-fM mt10 tac">关注微信</p>
		</span> </aside>
		<div class="clear"></div>
	</div>
	</section> </footer>
</body>
</html>

```



#### post请求报文

```javascript
// 请求行
POST http://test.lemonban.com/ningmengban/mvc/user/login.json HTTP/1.1

// 请求头部
Host: test.lemonban.com
Connection: keep-alive
Content-Length: 62
Accept: application/json, text/javascript, */*; q=0.01
Origin: http://test.lemonban.com
X-Requested-With: XMLHttpRequest
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Referer: http://test.lemonban.com/ningmengban/app/login/login.html  //从哪个链接页面过来的
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9

//空一行 
空一行 

//请求体
username=13888888888&password=e10adc3949ba59abbe56e057f20f883e
```

#### post 响应报文

```javascript
//响应状态行
HTTP/1.1 200 OK
//响应头部信息
Server: nginx/1.12.0
Date: Tue, 24 Mar 2020 10:44:56 GMT
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Connection: keep-alive
Set-Cookie: JSESSIONID=4FCBDC0840A9DA1328C4DBDD27871043; Path=/ningmengban

//空一行


//响应体
46
{"success":true,"message":"登录成功","content":null,"object":null}
0
```