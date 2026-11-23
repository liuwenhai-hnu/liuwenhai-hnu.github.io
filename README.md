# 刘汶海 · 个人作品集

湖南大学电子科学与技术本科生的个人主页，记录数字 IC 前端、RTL 验证、FPGA 联调和跨界实践。站点使用原生 HTML、CSS 和浏览器 ES Modules，直接从 GitHub Pages 的 `main` 分支根目录部署。

## 本地预览

在项目目录执行 `python3 -m http.server 8000`，打开 <http://localhost:8000/>。浏览器通过 HTTP 加载 ES Modules。

## 更新内容

| 内容 | 文件 |
| --- | --- |
| 首屏、简介、个人照和联系方式 | `data/profile.js` |
| 技能 | `data/skills.js` |
| 项目、分类、指标、图片和外链 | `data/projects.js` |
| 社区经历和专访 | `data/community.js` |
| 兴趣和近期动态 | `data/interests.js` |
| 工程笔记 | `data/notes.js` |
| 导航顺序、版权年份 | `data/siteConfig.js` |
| 颜色、字体和主要设计变量 | `styles/tokens.css` |

把图片放到 `assets/images/profile/`、`assets/images/projects/` 或 `assets/images/community/`，在对应数组加入 `{ src, alt, caption }`。如果另有高清图，可以设置 `fullSrc`。联系值和链接可以留空，页面会自动隐藏对应入口。更改笔记或兴趣的 `enabled` 后，导航也会更新。
