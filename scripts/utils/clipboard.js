import { element } from './dom.js';

function legacyCopy(value) {
  const focused = document.activeElement;
  const input = element('textarea', 'copy-helper');
  input.value = value;
  input.readOnly = true;
  document.body.append(input);
  input.select();
  input.setSelectionRange(0, value.length);
  try {
    return document.execCommand('copy');
  } finally {
    input.remove();
    if (focused?.isConnected) focused.focus({ preventScroll: true });
  }
}

export function initializeClipboard() {
  const toast = element('div', 'toast');
  toast.setAttribute('role', 'status');
  document.body.append(toast);
  let timer;
  document.addEventListener('click', async event => {
    const control = event.target.closest('[data-copy]');
    if (!control) return;
    let copied = false;
    try {
      await navigator.clipboard.writeText(control.dataset.copy);
      copied = true;
    } catch {
      try { copied = legacyCopy(control.dataset.copy); } catch { /* Show manual copy message. */ }
    }
    clearTimeout(timer);
    toast.textContent = copied
      ? `✓ 已复制${control.dataset.kind}：${control.dataset.copy}`
      : '复制失败，请选中文字手动复制。';
    toast.classList.add('visible');
    timer = setTimeout(() => toast.classList.remove('visible'), 2200);
  });
}
