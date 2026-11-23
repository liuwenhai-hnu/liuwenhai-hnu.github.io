export function showDialog(dialog) {
  const focused = document.activeElement;
  document.body.classList.add('dialog-open');
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    if (focused?.isConnected) focused.focus({ preventScroll: true });
  }, { once: true });
  dialog.showModal();
}

export function closeOnBackdrop(dialog) {
  let startedOutside = false;
  dialog.addEventListener('pointerdown', event => {
    startedOutside = event.target === dialog;
  });
  dialog.addEventListener('click', event => {
    if (startedOutside && event.target === dialog) dialog.close();
    startedOutside = false;
  });
}
