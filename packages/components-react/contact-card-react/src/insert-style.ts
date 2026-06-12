export const insertStyle = (css: string) => {
  if (typeof window !== 'undefined') {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  }
};
