// 填入真实笔记并启用后，导航和板块会一起显示。
export const notesData = {
  enabled: false,
  title: '工程笔记与踩坑记录',
  items: [
    {
      id: 'event-counter', date: '2026.11', category: 'RTL 验证',
      title: '事件计数器的阈值触发时序',
      summary: '结合采样沿与非阻塞赋值检查 trigger 的置位时机。',
      externalUrl: '',
      contentParagraphs: [
        '4 位版本使用更新前的 count 做阈值判断。阈值为 3 时，第 4 个有效事件采样沿后 trigger 置位。',
        '在 Testbench 中让 event_pulse 在有效沿前稳定，并在非阻塞更新完成后检查 count 和 trigger。',
      ],
    },
  ],
};
