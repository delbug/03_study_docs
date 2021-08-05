# vuePress

首页演示 :  [演示地址](https://ipv7.gitee.io/03_study_docs)

![index](./index1.png)





config.js

```BASH
base: '/03_study_docs/', // 设置站点根路径 (最好和github的仓库名称要一样)
```



yarn deploy   部署项目代码

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>

git push -f git@gitee.com:ipv7/web_sum.git master:gh-pages 
						   github名称/仓库名称
cd -

# https://gitee.com/ipv7/web_sum.git

```



package.json 

```bash
{
    "scripts": {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs",
        "deploy": "bash deploy.sh"
    },
    "devDependencies": {
        "@vuepress-reco/vuepress-plugin-bgm-player": "^1.1.3",
        "@vuepress/plugin-medium-zoom": "^1.5.2",
        "@vuepress/plugin-nprogress": "^1.5.2",
        "vuepress": "^1.2.0",
        "vuepress-plugin-auto-sidebar": "^1.4.1",
        "vuepress-plugin-comment": "^0.7.3",
        "vuepress-plugin-cursor-effects": "^1.0.0",
        "vuepress-plugin-dynamic-title": "^1.0.0",
        "vuepress-plugin-meting": "^0.1.0",
        "vuepress-plugin-ribbon": "^1.0.0",
        "vuepress-plugin-smooth-scroll": "^0.0.9"
    },
    "dependencies": {
        "moment": "^2.26.0",
        "valine": "^1.4.14",
        "vue-class-component": "^7.2.3",
        "vuepress-plugin-boxx": "0.0.7",
        "vuepress-plugin-reading-progress": "^1.0.9",
        "vuepress-plugin-sitemap": "^2.3.1",
        "vuepress-theme-reco": "^1.4.5"
    }
}
```



```bash
{
  name: '酱紫', // 站点名称
  desc: '酱紫的世界', // 站点描述
  link: "https://ipv7.gitee.io/web_sum/", // 站点地址
  thumbnail: '/blogImages/.png' // 站点图片链接
}
```

