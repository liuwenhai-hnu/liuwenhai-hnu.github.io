export const profileData = {
  name: "刘汶海",
  watermark: "LIUWENHAI",
  monogram: "LWH",
  school: "湖南大学",
  major: "电子科学与技术 · 本科",
  classYear: "2028 届",
  archiveId: "HNU-EE-2028",
  graduation: "2024.09 – 2028.06（2028 届）",
  seeking: {
    active: true,
    badgeText: "求职中 · 数字 IC 前端（RTL）/ FPGA / 功能验证实习",
    cities: "深圳",
    direction: "数字 IC 前端 · RTL / 功能验证",
    availability: "到岗时间以学校安排为准"
  },
  hero: {
    keywords: "电子科学与技术 / RTL & FPGA / AI & 具身智能跨界探索",
    tagline: "从数字逻辑设计与验证出发，也做硬件调试和 AI 原型。",
    primaryCta: { label: "浏览工程项目", href: "#projects" },
    secondaryCta: { label: "联系我", href: "#contact" }
  },
  about: {
    title: "把硬件做扎实，用 AI 加速探索",
    paragraphs: [
      "我是刘汶海，湖南大学电子科学与技术专业 2028 届本科生，目前聚焦数字 IC 前端设计（RTL）、FPGA 开发与数字 IC 功能验证方向，持续夯实数字逻辑、硬件描述与仿真调试基础。",
      "我在中科院高能物理研究所参与过 FPGA 板级联调，也参与了机械臂真机实验。在湖南大学金融科技协会和具身智能训练营，我分别参与黑客松组织和学员技术支持。"
    ],
    courses: ["数字电子技术", "模拟电子技术", "电路", "信号与系统", "微机原理"],
    stats: [
      { value: "2028", label: "湖南大学电科本科" },
      { value: "512组", label: "RTL 自检遍历验证" },
      { value: "IC×AI", label: "硬件与具身跨界实践" },
      { value: "HFT", label: "金融科技协会副会长" }
    ],
    /* TODO_BY_GPT: 后续查看用户朋友圈后，挑选 1~3 张自然清爽的照片放入 assets/images/profile/ 并填写下方数组；
       数组为空时，页面将自动渲染高级「个人工程档案卡」，无需修改 HTML/CSS */
    photos: [
      // { src: "assets/images/profile/photo-1.jpg", alt: "个人照片1", caption: "简要图注" }
    ],
    photoCaption: ""
  },
  contact: {
    email: "2258351862@hnu.edu.cn",
    phone: "",
    wechat: "lwhfx552607", // 留空时隐藏对应联系入口
    github: "https://github.com/liuwenhai-hnu",
    githubHandle: "liuwenhai-hnu"
  }
};
