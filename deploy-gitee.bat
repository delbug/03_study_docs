@echo off

echo building...
call build.bat
echo building-complete.

cd docs/.vuepress/dist
git init
git remote add origin https://gitee.com/ipv7/web_sum.git
git add -A
git commit -m 'auto-deploy'
rem git pull
git push --force origin HEAD:web_sum-pages

REM To delete the dist folder
cd ..
echo delete-directory: "%cd%/dist"
rmdir /s /q "%cd%/dist"
cd..
cd..
echo Auto-Deploy-Complete!
pause