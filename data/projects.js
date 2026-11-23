export const projectCategories = [
  { id: "all", label: "全部" },
  { id: "ic-fpga", label: "数字 IC & FPGA" },
  { id: "embodied", label: "具身智能与系统" },
  { id: "ai-lab", label: "黑客松 & AI 探索" }
];

export const projectsData = [
  {
    id: "verilog-rtl-verification",
    enabled: true,
    category: "ic-fpga",
    tag: "数字 IC · RTL 与验证",
    period: "2026.10 – 2026.11",
    role: "个人学习项目（AI 辅助 + 自检复核）",
    title: "Verilog RTL 设计与功能验证实践",
    summary: "用自检 Testbench 验证加法器，并用 Vivado 波形核对事件计数器的阈值触发与同步清零。",
    highlights: [
      "完成 MUX、Decoder、Comparator、全加器、4 位行波进位加法器（RCA4）及事件计数器等 RTL 设计与 Vivado 综合仿真，覆盖组合逻辑、异步复位、同步清零与饱和计数。",
      "RCA4 自检 Testbench 遍历 A、B、Cin 共 512 组输入，正常版全部通过，故障注入版检出 128 组失配。",
      "用 Testbench 和波形验证异步复位、同步清零、饱和计数与阈值触发。4 位版本按更新前的 count 判断阈值，trigger 在第 4 个有效事件采样沿后置位。"
    ],
    metrics: [
      { label: "遍历输入", value: "512 组" },
      { label: "故障检出", value: "128 组失配" },
      { label: "核心环节", value: "波形定位 + 自检" }
    ],
    techStack: ["Verilog", "Testbench", "故障注入", "波形分析", "Vivado"],
    links: [
      // TODO: 如有开源仓库，取消注释填写 url
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
    category: "ic-fpga",
    tag: "FPGA · 板级硬件调试",
    period: "2026.08",
    role: "中国科学院高能物理研究所 · 实践参与",
    title: "FPGA 电子学平台联调与时钟/电源板级验证",
    summary: "在科研电子学硬件平台上参与 Zynq / Kria K26 系统联调及关键外围器件配置测量。",
    highlights: [
      "参与 Kria K26 / Zynq 电子学平台系统级联调，接触 Linux / PetaLinux 嵌入式环境配置与系统集成问题排查。",
      "参与 Si570、ZL30274 时钟器件的配置与实测，接触 MAX34451 多路电源状态监测与异常复测，积累板级现场定位经验。"
    ],
    metrics: [
      { label: "硬件平台", value: "Kria K26 / Zynq" },
      { label: "时钟器件", value: "Si570 / ZL30274" },
      { label: "电源监测", value: "MAX34451" }
    ],
    techStack: ["Kria K26", "Zynq", "Linux / PetaLinux", "时钟配置", "多路电源监测"],
    links: [],
    /* TODO: 放入不涉密的板子实拍图，如 assets/images/projects/ihep-board.jpg */
    images: []
  },
  {
    id: "vla-robot-insertion",
    enabled: true,
    category: "embodied",
    tag: "具身智能 · 真机系统排障",
    period: "2026.07 – 至今",
    role: "真实机器人实验与系统验证",
    title: "VLA 机械臂精密插入真机实验与异常分析",
    summary: "面向真实物理环境中的视觉-机械臂闭环插入任务，排查感知与视频链路稳定性问题。",
    highlights: [
      "参与 RGB-D 视觉感知与机械臂精密插入真机实验，协助定位多相机视频缓存延迟、感知抖动及任务异常恢复等工程问题。",
      "结合 AI 编码工具辅助实验脚本迭代，并持续沉淀实验排障与复现记录。"
    ],
    metrics: [
      { label: "实验载体", value: "RGB-D + 真实机械臂" },
      { label: "排查重点", value: "缓存延迟 / 抖动 / 恢复" }
    ],
    techStack: ["RGB-D 视觉", "VLA 真机实验", "Linux / ROS", "系统排障", "Python"],
    links: [],
    images: []
  },
  {
    id: "mirror-os",
    enabled: true,
    category: "ai-lab",
    tag: "黑客松 · AI 创意原型",
    period: "2026 · 黑客松作品",
    role: "产品构思与 AI 辅助全栈原型（HFT 黑客松实践）",
    title: "Mirror-OS 太阳系文明模拟器",
    summary: "在限时黑客松中借助 AI 编程工作流快速落地的交互式 Web 模拟原型，已上线可直接在线体验。",
    highlights: [
      "在限时黑客松中完成太阳系文明演化的创意构思、界面交互原型设计与线上发布，验证从想法到可玩 Demo 的快速闭环。",
      "作为 Vibecoding 与 AI 辅助开发探索作品，持续测试 AI 编程工具在前端交互原型中的落地边界。"
    ],
    metrics: [
      { label: "作品形态", value: "可在线试玩 Web Demo" },
      { label: "开发模式", value: "限时黑客松 · AI 协作" }
    ],
    techStack: ["Web 交互原型", "AI 辅助开发", "GitHub Pages", "黑客松"],
    links: [
      { label: "在线体验 Demo", url: "https://liuwenhai-hnu.github.io/mirror-os/", primary: true },
      { label: "GitHub 源码", url: "https://github.com/liuwenhai-hnu/mirror-os", primary: false }
    ],
    /* TODO: 可截取 1~3 张 Mirror-OS 运行界面图放入 assets/images/projects/ */
    images: []
  },
  {
    id: "quantum-hackathon-loomq",
    enabled: true, // 如后续觉得过于轻量，改为 false 即可一键隐藏
    category: "ai-lab",
    tag: "黑客松 · 跨界探索",
    period: "2026 · 量子计算黑客松",
    role: "黑客松实践（AI 辅助基线改造）",
    title: "量子计算黑客松 · LoomQ-2026 Playground 改造",
    summary: "基于 LoomQ-2026 赛题基线集成交互式 Playground 并完成定向兼容性修复。",
    highlights: [
      "在量子计算黑客松中快速梳理 LoomQ 开源基线，借助 AI 工具集成 Playground 运行环境并排查修复依赖与兼容问题。"
    ],
    metrics: [
      { label: "探索方向", value: "量子计算赛题基线" },
      { label: "核心工作", value: "Playground 集成与修复" }
    ],
    techStack: ["Python", "LoomQ", "Playground", "AI 辅助探索"],
    links: [
      { label: "GitHub 仓库", url: "https://github.com/liuwenhai-hnu/quantum-hackathon-2026-loomq_pro", primary: false }
    ],
    images: []
  }
];
