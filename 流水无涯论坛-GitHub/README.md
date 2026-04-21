# 流水无涯论坛

一个现代化的社区论坛应用。

## 在线访问

部署在 GitHub Pages: https://你的用户名.github.io/流水无涯论坛-GitHub

## 部署说明

### 方法一：使用 GitHub Actions 自动部署

1. 将此仓库推送到 GitHub
2. 启用 GitHub Pages（Settings → Pages → Source: GitHub Actions）
3. 每次 push 到 main 分支会自动部署

### 方法二：手动部署到 docs 文件夹

1. 将构建好的静态文件放入 `docs` 文件夹
2. 在 GitHub 仓库 Settings → Pages → Source 选择 `docs` folder
3. 选择 main 分支

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 技术栈

- 前端框架：根据你的项目调整
- 构建工具：Vite

## 许可证

MIT License
