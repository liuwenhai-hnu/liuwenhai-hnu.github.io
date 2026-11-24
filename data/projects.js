export const projectCategories = [
  { id: "all", label: "全部" },
  { id: "ic-fpga", label: "数字 IC & FPGA" },
  { id: "embodied", label: "具身智能与系统" },
  { id: "ai-lab", label: "黑客松 & 探索" }
];

export const projectsData = [
  {
    id: "verilog-rtl-verification",
    enabled: true,
    tier: "core",
    category: "ic-fpga",
    tag: "数字 IC · RTL 与验证",
    period: "2026.05 – 2026.11",
    role: "个人工程实践（Verilog / Vivado 2025.2）",
    title: "Verilog RTL 设计与功能验证实践",
    summary: "用自检 Testbench 与故障注入验证组合/时序模块，结合 Vivado 波形、TCL 归档与 Zynq 预研打通基础流程。",
    highlights: [
      "完成 MUX、Decoder、Comparator、全加器、4 位行波进位加法器（RCA4）及 4/8 位事件计数器等 RTL 设计与 Vivado 综合仿真，覆盖组合逻辑、异步复位、同步清零与饱和计数。",
      "RCA4 自检 Testbench 遍历 A、B、Cin 共 512 组输入，正常版全部通过，故障注入版检出 128 组失配；4 位事件计数器按更新前 count 判断阈值，在波形中验证第 4 个有效采样沿后 trigger 置位。",
      "2026 年 5 月完成 Zynq-7010（PS + AXI GPIO）无板预研，核对地址映射与 xparameters.h 并生成 ARM .elf；同步实践 Vivado TCL 导出与仿真/综合结果归档。"
    ],
    metrics: [
      { label: "遍历自检", value: "512 / 512 通过" },
      { label: "故障注入", value: "检出 128 组失配" },
      { label: "工具环境", value: "Vivado / Zynq-7010 / TCL" }
    ],
    techStack: ["Verilog", "Self-checking TB", "故障注入", "波形分析", "Vivado / TCL", "Zynq-7010"],
    links: [
      // TODO: 整理好公开 RTL 仓库后取消注释填写 url
      // { label: "GitHub 仓库", url: "https://github.com/liuwenhai-hnu/...", primary: false }
    ],
    images: [
      {
        src: "assets/images/projects/event-counter-4bit-vivado.png",
        alt: "Vivado 中 4 位事件计数器的仿真波形",
        caption: "阈值为 3。第三个有效采样沿后 count 为 3，trigger 在第四个沿后置位。clear 被时钟采样后，count 和 trigger 同步清零。"
      }
    ]
  },
  {
    id: "ihep-fpga-debug",
    enabled: true,
    tier: "core",
    category: "ic-fpga",
    tag: "FPGA · 科研电子学板级联调",
    period: "2026.05 – 2026.09",
    role: "中国科学院高能物理研究所科创计划 · 科研实践",
    title: "CEPC 触发通用板 FPGA 电子学平台联调与板级验证",
    summary: "在赵京周老师团队参与基于 Zynq / Kria K26 的科研电子学板卡集成、时钟/电源调试及高速链路测试。",
    highlights: [
      "参与 Zynq 预研、8 月 Kria K26 / ATCA 现场外围器件调试及 9 月 CEPC 通用板项目汇报，接触 Vivado 与 Linux / PetaLinux 环境配置。",
      "使用 Linux i2c-tools 进行从机扫描、寄存器读写及 TCA9548 通道选通，通过不同 Zynq 平台交叉测试排查通信异常，定位并复测 MLX120 接线问题。",
      "参与 MLX120、MLX040 电源配置及 MAX34451 多路电源监测，结合 PMBus 寄存器读回与电压实测复核；参与 Si570、ZL30274 时钟配置及起振异常排查。"
    ],
    metrics: [
      { label: "科研平台", value: "CEPC 通用板 / Kria K26" },
      { label: "板级定位", value: "i2c-tools / TCA9548 / MLX120" },
      { label: "电源与时钟", value: "MAX34451 / Si570 / ZL30274" }
    ],
    techStack: ["Kria K26", "Zynq", "i2c-tools / TCA9548", "PMBus / MAX34451", "Si570 / ZL30274", "PetaLinux"],
    links: [],
    images: [
      {
        src: "assets/images/projects/ihep-board.jpg",
        alt: "在中科院高能物理研究所参与联调的 CEPC FPGA 电子学板卡实拍",
        caption: "中国科学院高能物理研究所 · CEPC 通用板 FPGA 电子学平台联调"
      }
    ]
  },
  {
    id: "vla-robot-insertion",
    enabled: true,
    tier: "core",
    category: "embodied",
    tag: "具身智能 · 真机系统排障",
    period: "2026.07 – 2026.11",
    role: "湖南大学刘鑫琦老师课题组 · GAP-VLA 真机实验",
    title: "GAP-VLA 机械臂精密装配真机实验与系统排障",
    summary: "面向真实机械臂精密装配与插入任务，负责 RGB-D 空间位姿测量验证并参与多相机系统排障。",
    highlights: [
      "负责 RGB-D 2D→3D 位姿测量模块的方案设计、AI 辅助实现与实验验证：结合 RGB 轮廓、深度反投影、RANSAC 平面拟合及射线-平面求交，恢复三维角点并构建局部坐标系。",
      "协助排查多相机视频缓存延迟、感知抖动及任务异常恢复等真机系统问题，并参与发明专利《一种位姿反馈引导的视觉语言机器人装配方法及系统》技术交底编制（申请准备中）。"
    ],
    metrics: [
      { label: "实验载体", value: "RGB-D + 真实机械臂" },
      { label: "核心工作", value: "2D→3D 几何验证 / 多相机排障" }
    ],
    techStack: ["RGB-D 视觉", "2D→3D 位姿", "VLA 真机实验", "Linux / ROS", "Python"],
    links: [],
    images: []
  },
  {
    id: "mirror-os",
    enabled: true,
    tier: "exploration",
    category: "ai-lab",
    tag: "黑客松 · 在线原型",
    period: "2025.12",
    role: "产品构思与 AI 辅助原型（约 3 小时 MVP）",
    title: "Mirror-OS 太阳系文明模拟器",
    summary: "在校园黑客松中快速构思并部署上线的 3D 太阳系文明演化交互式 Web 原型，可直接在线试玩。",
    highlights: [
      "限时完成模拟玩法构思、交互原型实现与 GitHub Pages 上线交付。"
    ],
    metrics: [
      { label: "作品形态", value: "可在线试玩 Web Demo" }
    ],
    techStack: ["Web 交互原型", "AI 辅助开发", "GitHub Pages"],
    links: [
      { label: "在线体验 Demo", url: "https://liuwenhai-hnu.github.io/mirror-os/", primary: true },
      { label: "GitHub 源码", url: "https://github.com/liuwenhai-hnu/mirror-os", primary: false }
    ],
    images: []
  },
  {
    id: "quantum-hackathon-loomq",
    enabled: true,
    tier: "exploration",
    category: "ai-lab",
    tag: "黑客松 · 跨界探索",
    period: "2026.08",
    role: "SheNicest 2026 夏季量子计算黑客松 · 团队协作",
    title: "LoomQ-2026 量子计算 Playground 改造",
    summary: "基于 LoomQ-2026 赛题基线参与产品层整合与交互式 Playground 改造，并排查多平台依赖兼容问题。",
    highlights: [
      "参与梳理开源基线、Agent 交互工作流集成及定向兼容性修复。"
    ],
    metrics: [
      { label: "合作方向", value: "量子计算交互工具探索" }
    ],
    techStack: ["Python", "LoomQ", "Playground", "AI 协作"],
    links: [
      { label: "GitHub 仓库", url: "https://github.com/liuwenhai-hnu/quantum-hackathon-2026-loomq_pro", primary: false }
    ],
    images: []
  },
  {
    id: "grade-analytics-doubao",
    enabled: true,
    tier: "exploration",
    category: "ai-lab",
    tag: "AI 创作挑战赛 · 获奖作品",
    period: "2025.12",
    role: "豆包 × Intel「一点都不技术」创作挑战赛 · 创作新星奖",
    title: "学生成绩可视化分析平台",
    summary: "面向学生成绩复盘场景搭建的数据可视化看板，获豆包与 Intel 联合主办创作挑战赛「创作新星奖」。",
    highlights: [
      "将原始成绩数据转化为直观的多维度可视化分析看板，探索 AI 辅助应用快速落地。"
    ],
    metrics: [
      { label: "所获荣誉", value: "创作新星奖（2025.12）" }
    ],
    techStack: ["数据可视化", "AI 应用原型", "豆包 × Intel"],
    links: [],
    images: [
      {
        src: "assets/images/projects/cert-doubao-intel.jpg",
        alt: "豆包与 Intel 联合主办「一点都不技术」创作挑战赛创作新星奖荣誉证书",
        caption: "2025 年 12 月 · 豆包 × Intel 创作新星奖证书"
      }
    ]
  }
];
