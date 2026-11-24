export const profileData = {
  name: "刘汶海",
  watermark: "LIUWENHAI",
  monogram: "LWH",
  school: "湖南大学",
  college: "物理与微电子科学学院",
  major: "电子科学与技术 · 本科",
  classYear: "2028 届",
  archiveId: "HNU-EE-2028",
  graduation: "2024.09 – 2028.06（2028 届）",
  // 简历 PDF 静默开关：放好文件（如 assets/resume.pdf）并填入路径后，首屏与页脚会自动显示下载入口；留空则隐藏
  resumePdf: "assets/resume.pdf",
  seeking: {
    active: false,
    badgeText: "数字 IC 前端（RTL）/ FPGA / 功能验证",
    cities: "深圳",
    direction: "数字 IC 前端 · RTL / FPGA / 功能验证",
    availability: ""
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
      "我是刘汶海，湖南大学物理与微电子科学学院电子科学与技术专业 2028 届本科生。大一由金融学转入电子科学与技术后，目前聚焦数字 IC 前端设计（RTL）、FPGA 开发与功能验证方向，持续夯实数字逻辑、硬件描述与仿真调试基础。",
      "课内之外，我也在真实科研与跨界场景里边做边学——参与过中科院高能物理研究所 CEPC 通用板 FPGA 联调和真实机械臂闭环实验，也在湖南大学金融科技协会（HFT）和达摩院 × Datawhale 具身智能训练营参与黑客松组织与学员技术支持。"
    ],
    courses: ["数字电子技术", "模拟电子技术", "电路", "信号与系统", "微机原理", "固体物理", "半导体物理"],
    stats: [
      { value: "2028", label: "湖南大学电科本科" },
      { value: "512组", label: "RTL 自检遍历验证" },
      { value: "IC×AI", label: "硬件与具身跨界实践" },
      { value: "HFT", label: "金融科技协会副会长" }
    ],
    photos: [
      {
        src: "assets/images/profile/great-wall.jpg",
        alt: "在长城上望向群山的背影",
        caption: "2026 年 8 月 · 长城"
      }
    ],
    photoCaption: "2026 年 8 月 · 长城"
  },
  contact: {
    email: "2258351862@hnu.edu.cn",
    phone: "",
    wechat: "lwhfx552607", // 留空时隐藏对应联系入口
    github: "https://github.com/liuwenhai-hnu",
    githubHandle: "liuwenhai-hnu"
  }
};
