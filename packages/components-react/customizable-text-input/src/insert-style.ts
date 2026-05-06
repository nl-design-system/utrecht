export const insertStyle = function (css: string) {
  if (typeof document !== 'undefined') {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  }
};
