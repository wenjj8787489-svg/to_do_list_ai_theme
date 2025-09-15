# 智能 To-Do List 待办事项应用

## 项目简介

本项目基于开源 To-Do List 项目二次开发，新增了多主题切换和 AI 智能扩展功能。用户可以便捷地管理待办事项，并通过接入通义千问大模型一键扩展任务内容，提升效率和体验。

## 在线体验

> 部署方式：支持本地运行和云服务器部署  
> （如已部署，可在此处放置访问链接）

## Demo 演示

> 视频链接：

[点击观看 Demo 演示]([https://你的演示视频链接](https://www.bilibili.com/video/BV1DSpuzJECE/))

## 主要功能

- 🌈 多主题切换（标准、明亮、深色、Chiikawa 等）
- 🤖 AI 智能扩展：一键调用通义千问大模型，自动补全或优化待办事项
- 🕒 实时显示当前日期和时间
- 💾 本地存储：自动保存任务，刷新页面不丢失
- 📱 响应式设计，适配手机、平板和桌面端
- 🗑️ 支持任务添加、删除、完成状态切换

## 技术栈

- 前端：HTML5、CSS3（含响应式）、JavaScript
- 后端：Node.js + Express
- AI 接口：通义千问大模型（DashScope API）

## 快速启动

1. 克隆项目到本地  
   ```bash
   git clone https://github.com/你的用户名/你的仓库名.git
   cd 你的仓库名
   ```
2. 安装依赖  
   ```bash
   npm install
   ```
3. 配置环境变量  
   在根目录新建 `.env` 文件，内容如下（需申请通义千问 API Key）：
   ```
   DASHSCOPE_API_KEY=你的API密钥
   ```
4. 启动服务  
   ```bash
   node server.js
   ```
5. 浏览器访问 [http://localhost:3000](http://localhost:3000)

## 参考与致谢

- 字体：[Google Fonts](https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap)
- 图标：[Font Awesome](https://fontawesome.com)
- AI 接口：[通义千问 DashScope](https://dashscope.aliyun.com/)

## 贡献

欢迎提交 issue 和 PR，一起完善项目！

---
