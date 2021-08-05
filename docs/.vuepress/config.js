// .vuepress/config.js
const moment = require('moment'); // 时间
moment.locale('zh-cn')

// 配置
module.exports = {
    title: '酱紫的世界', // 设置网站标题
    // dest: './dist', // 设置输出目录
    base: '/web_sum/', // 设置站点根路径 (和github命令的名称要一样)
    repo: 'https://github.com/delbug/web_sum.git', // 添加 github 链接
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }] //移动端搜索优化
    ],
    publish: true,
    theme: 'reco',
    description: ' ', // meta 首页 中的描述文字，用于SEO
    // 插件
    plugins: [
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: '3L1fpObjz755gChYukdN6DYE-gzGzoHsz',
                    appKey: '1tnWDx6OEre8iXr65lndUhFW'
                }
            }
        ],
        ["vuepress-plugin-boxx"], // 随机名言
        [
            "dynamic-title",
            {
                // showIcon: "/favicon.ico",
                showText: "(/≧▽≦/)咦！又好了！",
                hideIcon: "/failure.ico",
                hideText: "(●—●)喔哟，崩溃啦！",
                recoverTime: 2000
            }
        ],
        // [ // 音乐插件
        //     'meting', {
        //         metingApi,
        //         meting: {
        //             server: "netease",
        //             type: "playlist",
        //             mid: "2539599584",
        //         },
        //         aplayer: {
        //             lrcType: 3
        //         },
        //         mobile
        //     }
        // ]
        [
            "ribbon",
            {
                size: 60, // width of the ribbon, default: 90
                opacity: 0.3, // opacity of the ribbon, default: 0.3
                zIndex: -1 // z-index property of the background, default: -1
            }
        ],
        // ['@vuepress/medium-zoom', {
        //     selector: 'img.zoom-custom-imgs',
        //     options: {
        //         margin: 16
        //     }
        // }],
        ['@vuepress/medium-zoom'],
        [
            "cursor-effects",
            {
                size: 2, // size of the particle, default: 2
                shape: ['circle'], // shape of the particle, default: 'star'
                zIndex: 999999999 // z-index property of the canvas, default: 999999999
            }
        ],
        ['flowchart'], // 支持流程图
        [
            '@vuepress-reco/vuepress-plugin-bgm-player', // BGM播放器
            {
                autoShrink: "true",
                floatPosition: 'right',
                shrinkMode: 'float',
                floatStyle: { bottom: '2%', 'z-index': '999999', width: '50px', height: '50px' },
                audios: [
                    { name: 'Faster Than Light', artist: 'Andreas Waldetoft / Mia Stegmar', url: 'https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3', cover: 'https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg' },
                    { name: 'Dawn', artist: 'DDRKirby(ISQ)', url: 'https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3', cover: 'https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg' },
                    { name: 'TRON Legacy (End Titles)', artist: 'Daft Punk', url: 'https://cdn-image.tsanfer.xyz/music/Daft%20Punk%20-%20TRON%20Legacy%20%28End%20Titles%29.mp3', cover: 'https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg' },
                    { name: 'Broken Boy', artist: 'Tonspender', url: 'https://cdn-image.tsanfer.xyz/music/Tonspender%20-%20Broken%20Boy.flac', cover: 'https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg' },
                    { name: 'Life Of Sin Pt. 4', artist: 'MitiS', url: 'https://cdn-image.tsanfer.xyz/music/MitiS%20-%20Life%20Of%20Sin%20Pt.%204.mp3', cover: 'https://p2.music.126.net/LmjTrSwvSLSNBsfFsQFO6g==/2533274793491743.jpg' },
                    { name: 'Sea Of Voices (RAC Mix)', artist: 'Porter Robinson', url: 'https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3', cover: 'https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg' },
                    { name: 'New Lipstick', artist: 'The Kissaway Trail', url: 'https://cdn-image.tsanfer.xyz/music/The%20Kissaway%20Trail%20-%20New%20Lipstick.flac', cover: 'https://p2.music.126.net/VjN74c1hoYgPCEZ9DngeQw==/109951163772624643.jpg' },
                ],
            },
        ],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    // 不要忘了安装 moment
                    return moment(timestamp).format('lll') // 时间
                }
            },
        ],
        ['vuepress-plugin-smooth-scroll'], // 平滑滚动
        ['@vuepress/nprogress'], // 加载进度条
        ['reading-progress'] // 阅读进度条
    ],
    themeConfig: {
        prev: './some-other-page', // 上一页
        next: true, // 下一页
        noFoundPageByTencent: false,
        sidebarDepth: 2,
        lastUpdated: '最后更新时间', // string | boolean
        authorAvatar: '/assets/img/logo.png', // 设置头像右边
        type: 'blog', // 类型是博客
        bgImage: "/assets/img/bg3.jpg",
        bgImageStyle: {
            height: '350px'
        },
        blogConfig: {
            bgImage: "/assets/img/bg3.jpg",
            authorAvatar: '/logo.png',
            category: {
                icon: 'reco-linkedin',
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '前端总结', // 默认文案 “分类”
            },
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认文案 “标签”
            }
        },
        friendLink: [ // 设置右下角的友情链接 title 友链标题desc 友链描述logo 友链 LOGO（本地图片或网络图片）email 如果没有设置 logo，将通过 Email获取到的 Gravatar 头像来设置 LOGO ；link 友链地址
            {
                title: 'Gitee地址',
                desc: 'web_sum',
                logo: "",
                link: 'https://gitee.com/ipv7/web_sum.git'
            }
        ],
        logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端随笔',
                icon: 'reco-three',
                items: [
                    { text: 'html', link: '/suibi/html/' },
                    { text: 'css', link: '/suibi/css/' },
                    { text: 'js', link: '/suibi/js/' },
                    { text: 'jquery', link: '/suibi/jquery/' },
                    { text: 'es6', link: '/suibi/es6/' },
                    { text: 'element', link: '/suibi/element/' },
                    { text: 'npm', link: '/suibi/npm/' },
                    { text: 'vuex', link: '/suibi/vuex/' },
                    { text: 'vue', link: '/suibi/vue/' },
                    { text: 'vant', link: '/suibi/vant/' },
                    { text: 'http', link: '/suibi/http/' },
                    { text: 'fiddler', link: '/suibi/fiddler/' },
                ]
            },
            { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
            {
                text: '工具',
                icon: 'reco-up',
                ariaLabel: 'Language Menu',
                items: [
                    { text: '浏览器同步测试工具', link: '/tools/浏览器同步测试工具/' },
                    { text: '正则表达式', link: '/regexp/正则表达式/' },
                    { text: 'ps', link: "/ps/ps的基本使用和切图" },
                ]
            },
            {
                text: '留言板',
                link: '/leave/',
                icon: 'reco-message'
            }
        ],
        sidebar: {
            '/css/': ['1.CSS初始以及选择器', '2.CSS复合选择器', '3.CSS文字文本样式', '4.显示模式', '5.三大特性', '6.背景', '7.盒子模型', '8.清除浮动', '9.CSS高级技巧', '10.定位讲义'],
            '/html/': ['01-前言-WEB标准', '02-HTML标签'],
            '/ps/': ['ps的基本使用和切图'],
            '/js/': [
                '01-JS基础',
                '02-JS基础',
                '03-JS基础',
                '04-JS基础',
                '05-JS基础',
                '06-JS基础',
                '07-JS高级',
                '08-JS高级-继承',
                '09-JS高级-函数进阶',
                '10-JS高级-函数高阶',
                '11-JS高级-总结'
            ],
            '/mobile_web/': [
                '01-mobileweb-2d3d动画',
                '02-mobileweb-移动web之屏幕适配',
                '03-mobileweb-伸缩布局和LESS介绍',
                '04-mobileweb-rem,媒体查询适配方案',
                '05-mobileweb-响应式布局',
            ],
            '/webapi/': [
                '01-webapi',
                '02-webapi',
                '03-webapi',
                '04-webapi',
                '05-webapi',
                '06-webapi',
                '07-webapi',
            ],
            '/jquery/': [
                '01-jquery',
                '02-jquery',
                '03-jquery',
                '04-jquery',
                '05-jquery',
            ],
            '/regexp/': [
                '正则表达式'
            ],
            '/es6/': [
                'ES6',
                'ES6及ES6降级处理'
            ],
            '/nodejs/': [
                '01-Web概念-初识Node.js',
                '02-文件模块-核心模块-第三方模块',
                '03-HTTP协议-静态服务器',
                '04-动态服务器',
                '05-Express',
                '06-MySQL',
                '07-综合案例-状态保持',
            ],
            '/ajax/': [
                '01-ajax',
                '02-ajax'
            ],
            '/tools/': [
                "浏览器同步测试工具",
            ],
            '/canvas/': [
                'canvas'
            ],
            '/interview/': [
                '面试题2019',
                '面试题2020',
                '前端JS面试题',
                '前端面试必知必会的十点',
                "前端面试2020这样准备",
                "网友面试题2020",
                "前端面试2020js核心"
            ],
            '/suibi/css/': [
                '各个方向的轮播图',
                '前端布局神器displayflex'
            ],
            '/suibi/html/': [],
            '/suibi/js/': [
                'Math.random-计算取值范围公式',
                "构造函数-原型-实例对象三角关系"
            ],
            '/suibi/element/': [
                'element-ui表格修改后'
            ],
            '/suibi/es6/': [
                '通过Promise.reject或抛出异常改变本次Promise状态',
                "Promise.all批量获取数据"
            ],
            '/suibi/vue/': [
                "vue3.0关闭eslint",
                "vue路由router取值",
                "vue核心源码练手",
                '疫情地图Echarts-vue-demo',
                'vue-ajax发送请求-demo',
                "Vue的核心思想为数据驱动和组件化",
                "底部标签,点击标签,通过类名切换背景图",
                "vue修改第三方css样式",
                "v-for循环直接设置图片路径图片不显示如何解决",
                '使用element写轮播图',
                "导入图片用require,不能直接导入"
            ],
            '/suibi/vuex/': ['vuex-modules怎么使用'],
            '/suibi/http/': [
                "TCP三次握手、四次挥手简单记忆",
                'http协议报文给你讲明白咯'
            ],
            '/suibi/fiddler/': [
                'fiddler模拟钓鱼网站',
                "fiddler怎么使用"
            ],
            '/suibi/npm/': ['nrm切换npm源淘宝镜像'],
            '/suibi/jquery/': ['大屏列表上下滚动插件liMarquee–jQuery'],
            '/suibi/vant/': ['修改自带vant-ui样式方法']
        },
        //作者
        author: '酱紫',
        authorLink: 'https://gitee.com/ipv7/web_sum.git',
        // 备案
        // record: 'ICP 备案文案',
        // recordLink: 'ICP 备案指向链接',
        // cyberSecurityRecord: '公安部备案文案',
        // cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2020',
        mode: 'light', //默认显示白天模式 
    },
    markdown: {
        lineNumbers: true //代码显示行号
    },
    // 搜索设置
    search: true,
    searchMaxSuggestions: 16,
}