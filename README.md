# 项目构建
npm install yarn -g
yarn install -g create-react-app
create-react-app my-react-app
## 路由配置参考 url(https://kalacloud.com/blog/react-router-tutorial/)
npm install react-router-dom@6

## 发布到githubPages 注意事项
详见：https://www.cxymm.net/article/Sophie_U/80006723
整个页面不可见：package.json 里面加入 "homepage" : "."
history模式的路由失效：要么改用hash模式，要么修改nginx配置

# 启动 
ca my-react-app
npm start 
npm run build