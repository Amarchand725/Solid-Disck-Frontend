export default function blockDevTools() {
  if (typeof window === 'undefined') return;

  document.addEventListener('contextmenu', (e) => e.preventDefault());

  document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(key)) ||
      (e.ctrlKey && key === 'U')
    ) {
      e.preventDefault();
      e.stopPropagation();
      alert('Developer tools are disabled.');
      return false;
    }
  });
}
