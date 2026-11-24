// 后续可替换为本人确认的兴趣。isPlaceholder 为 true 的条目不会显示。
export const interestsData = {
  enabled: true,
  title: '代码与电路之外',
  items: [
    {
      name: '做了一个小森林',
      desc: '五一做了一个小森林，也写了一点项目记录。',
      images: [
        {
          src: 'assets/images/interests/mini-forest.jpg',
          alt: '玻璃容器里的微景观，有绿植、苔藓和彩色叶片',
          caption: '2026 年 5 月 · 小森林',
        },
      ],
    },
    {
      name: 'Crystal Lattice Lab · 交互可视化',
      desc: '结合固体物理课程用 Three.js 做了一个可旋转的三维晶格实验室，用来直观理解原胞与平移矢量。',
    },
  ],
  now: {
    updatedAt: '2026.11',
    items: [
      '系统练习 Verilog 时序逻辑与自检验证',
      '推进数字 IC 前端与 FPGA 工程实践',
      '用 AI 工具探索工程复核与交互原型',
    ],
  },
};
